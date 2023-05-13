import { Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { LoginCheckInterceptor } from '../../common/interceptors/login-check.interceptor';

@Controller('/api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseInterceptors(LoginCheckInterceptor)
  async fetchUsers(): Promise<UserEntity[]> {
    return await this.userService.fetchUsers();
  }

  @Post()
  async createUser(createUserDto: CreateUserDto): Promise<string> {
    await this.userService.createUser(createUserDto);
    return 'created!';
  }
}
