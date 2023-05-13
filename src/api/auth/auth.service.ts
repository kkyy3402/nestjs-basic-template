import { Injectable, Req } from '@nestjs/common';
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
    const userExist = await this.userRepository.findOne({
      where: {
        email: requestLoginDto.email,
        password: requestLoginDto.password,
      },
    });

    if (!userExist) {
      throw new UserNotExistException();
    }

    return true;
  }
}
