import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

import configs from './common/configs';
import { FILE_UPLOAD_DIR } from './common/constants/file';

import { PlayerModule } from './player/player.module';
import { AspectModule } from './aspect/aspect.module';
import { CriteriaModule } from './criteria/criteria.module';
import { AssassmentModule } from './assassment/assassment.module';
import { StatisticModule } from './statistic/statistic.module';
import { ScheduleModule } from './schedule/schedule.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: configs,
      ignoreEnvFile: false,
      isGlobal: true,
      cache: true,
      envFilePath: ['.env'],
    }),
    MulterModule.register({
      dest: FILE_UPLOAD_DIR,
      limits: { fieldSize: 1000 * 1000 * 2 },
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'test.db',
      synchronize: true,
    }),
    PlayerModule,
    AspectModule,
    CriteriaModule,
    AssassmentModule,
    StatisticModule,
    ScheduleModule,
    AuthModule, // Tambahkan modul autentikasi
    UserModule, // Tambahkan modul pengguna
  ],
})
export class AppModule {}
