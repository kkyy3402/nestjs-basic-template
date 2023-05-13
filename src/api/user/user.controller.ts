import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { ApiResponse } from '../../common/response/api-response';

@Controller('/api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  // @UseInterceptors(LoginCheckInterceptor)
  async fetchUsers(): Promise<any> {
    const data = await this.userService.fetchUsers();
    const result = ApiResponse.success(data);
    return result;
  }

  @Post()
  async createUser(createUserDto: CreateUserDto): Promise<string> {
    await this.userService.createUser(createUserDto);
    return 'created!';
  }
}
