import { Controller, Post, Req } from '@nestjs/common';
import { RequestLoginDto } from './dtos/request-login.dto';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller('/api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(
    @Req() request: Request,
    requestLoginDto: RequestLoginDto,
  ): Promise<boolean> {
    const loginSuccess = await this.authService.login(request, requestLoginDto);
    return loginSuccess;
  }
}
