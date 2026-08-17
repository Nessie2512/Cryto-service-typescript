import { Injectable } from "@nestjs/common";
import { IstatementRepo } from "./Istatement.repo"
import { cryptoProvider } from "./cryptoProvider";
import { Statement } from "./statement.entity";

export namespace create{
    
    @Injectable()
    export class create{

        constructor(
            private readonly IstatementRepository:IstatementRepo,
             private readonly cryptoService:cryptoProvider
            ){}

        execute(document:string, credit:string, value:number){
        const encryptedDocument = this.cryptoService.encrypt(document);
        const encryptedCreditCard = this.cryptoService.encrypt(credit);
        const newStamentCreated = Statement.create(encryptedDocument,encryptedCreditCard,value)
            this.IstatementRepository.create(newStamentCreated);
        }
    }
}