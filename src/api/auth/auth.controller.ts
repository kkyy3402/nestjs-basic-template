import { Body, Controller, Post, Req } from '@nestjs/common';
import { RequestLoginDto } from './dtos/request-login.dto';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { ApiResponse } from '../../common/response/api-response';

@Controller('/api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(
    @Req() request: Request,
    @Body() requestLoginDto: RequestLoginDto,
  ): Promise<any> {
    const loginSuccess = await this.authService.login(request, requestLoginDto);
    return ApiResponse.success(null, `로그인에 성공하였습니다.`);
  }
}
