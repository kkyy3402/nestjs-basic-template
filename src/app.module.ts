import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './api/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from './common/configs/typeorm.config';
import { UserEntity } from './api/user/entities/user.entity';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';
import { APP_FILTER } from '@nestjs/core';
import { LoggingMiddleware } from './common/middlewares/logging.middleware';
import { AuthController } from './api/auth/auth.controller';
import { AuthService } from './api/auth/auth.service';
import { AuthModule } from './api/auth/auth.module';
import { SessionMiddleware } from './common/middlewares/session.middleware';

@Global()
@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([UserEntity]),
    AuthModule,
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
    AuthService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
    consumer.apply(SessionMiddleware).forRoutes('*');
  }
}
