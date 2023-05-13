import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mariadb', // 데이터베이스 종류에 따라 변경
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1234',
  database: 'test2',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: true,
};

export default typeOrmConfig;
