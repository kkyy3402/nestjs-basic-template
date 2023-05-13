import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import session from 'express-session';

@Injectable()
export class SessionMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    session({
      secret: 'your-secret-key-your-secret-key',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false }, // 필요에 따라 설정
    })(req, res, next);
  }
}
