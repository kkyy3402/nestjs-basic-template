import { BadRequestException, Injectable, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { RequestLoginDto } from './dtos/request-login.dto';
import { UserNotExistException } from '../../common/exceptions/user-not-exist.exception';
import { Request } from 'express';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async login(
    @Req() request: Request,
    requestLoginDto: RequestLoginDto,
  ): Promise<boolean> {
    if (!requestLoginDto.email) {
      throw new BadRequestException('이메일이 입력되어야 합니다.');
    }

    if (!requestLoginDto.password) {
      throw new BadRequestException('비밀번호가 입력되어야 합니다.');
    }

    const userExist = await this.userRepository.findOne({
      where: {
        email: requestLoginDto.email,
        password: requestLoginDto.password,
      },
    });

    if (!userExist) {
      throw new UserNotExistException();
    }

    //TODO: - 세션 발급 or JWT 발급

    return true;
  }
}
