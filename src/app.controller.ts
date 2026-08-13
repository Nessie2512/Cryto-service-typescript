import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("statement/")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getStatements() {
    return this.appService.getAllstatements();
  }

  @Post("/create")
  createStatement(@Body() statement: {document:string, credit:string,value:number}){
    return this.appService.createStatement(statement.document, statement.credit, statement.value);
  }
}
