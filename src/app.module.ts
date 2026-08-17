import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { create } from './create';
import { IstatementRepo } from './Istatement.repo';
import { statementRepository } from './statementmemory.repo';
import { findall } from './findall';
import { cryptoProvider } from './cryptoProvider';
import { AesCryptoService } from './AesCryptoService';
import { PrismaModule } from './prisma/prisma.module';
import { statementPrisma } from './statement.prisma';

@Module({
  controllers: [AppController],
  providers: [
    create.create,findall.findall,AppService, 
    {
      provide:IstatementRepo,
      useClass:statementPrisma,
    },
    {
      provide:cryptoProvider,
      useClass:AesCryptoService,
    }
  ],
  imports: [PrismaModule],
})
export class AppModule {}
