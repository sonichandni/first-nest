import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
// import { AuthModule } from './auth/auth.module';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'postgres',
      username: 'postgres',
      entities: [User], // here we have added user enitity in entities array
      database: 'pgWithNest',
      synchronize: true,
      logging: true,
    }),
    UserModule,
    // AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }