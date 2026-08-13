import { Injectable } from "@nestjs/common";
import { IstatementRepo } from "./Istatement.repo"

export namespace create{
    
    @Injectable()
    export class create{

        constructor(private readonly IstatementRepository:IstatementRepo){}

        execute(document:string, credit:string, value:number){
            
            const newStatement = {document, credit, value}
            console.log(newStatement)
            this.IstatementRepository.create(document, credit, value);
        }
    }
}