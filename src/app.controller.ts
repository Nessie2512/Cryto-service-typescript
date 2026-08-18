import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("statement/")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public async getStatements() {
    
    return await this.appService.getAllstatements();
  }

  @Post("/create")
  public async createStatement(@Body() statement: {document:string, creditcard:string,value:number}){
    return await this.appService.createStatement(statement.document, statement.creditcard, statement.value);
  }
}
