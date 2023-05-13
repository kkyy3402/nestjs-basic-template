import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { printLog } from '../utils/log-util';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // HTTP 요청 처리 로직
    printLog(`[REQUEST] ${req.method} ${JSON.stringify(req.originalUrl)}\n`);

    // 다음 미들웨어 또는 핸들러 호출
    next();

    // HTTP 응답 처리 로직
    printLog('[RESPONSE]\n', res.statusCode);
  }
}
