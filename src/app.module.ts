import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { create } from './create';
import { IstatementRepo } from './Istatement.repo';
import { statementRepository } from './statementmemory.repo';
import { findall } from './findall';

@Module({
  controllers: [AppController],
  providers: [
    create.create,findall.findall,AppService, 
    {
      provide:IstatementRepo,
      useClass:statementRepository,
    }
  ],
})
export class AppModule {}
