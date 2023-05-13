import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { SessionNotExistException } from '../exceptions/session-not-exist.exception';
import { printLog } from '../utils/log-util';

@Injectable()
export class LoginCheckInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const session = request.session;

    printLog(`[LoginCheckInterceptor] session : ${session}`);

    //TOOD: - 세션 체크 로직
    const sessionExists = session !== undefined;
    if (!sessionExists) {
      throw new SessionNotExistException();
    }
    return next.handle();
  }
}
