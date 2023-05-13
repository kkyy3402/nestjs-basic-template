import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { SessionData } from 'express-session';

interface ExtendedSessionData extends SessionData {
  userId?: number;
}

export const Session = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const request = context
      .switchToHttp()
      .getRequest<Request & { session: ExtendedSessionData }>();
    return request.session;
  },
);
