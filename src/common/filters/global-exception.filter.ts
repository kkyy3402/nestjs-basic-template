import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { printLog } from '../utils/log-util';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    printLog(`request : ${request}`);
    printLog(`response : ${response}`);
    return this.handleException(exception, response, request);
  }

  private handleException(
    exception: Error,
    response: Response,
    request: Request,
  ) {
    response.status(HttpStatus.UNAUTHORIZED).json({
      message: exception.message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
