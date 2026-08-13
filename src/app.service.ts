import { Injectable } from '@nestjs/common';
import { create } from './create';
import { findall } from './findall';

@Injectable()
export class AppService {

  constructor(
    private readonly createStatementUsecase: create.create,
    private readonly findAllstatements:findall.findall,
  ){}


  public async getAllstatements() {
    return await this.findAllstatements.execute();
  }

  public async createStatement(document:string, credit:string, value:number){
         await this.createStatementUsecase.execute(document, credit, value)
  }
}
