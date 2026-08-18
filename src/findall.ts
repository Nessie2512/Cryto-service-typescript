import { Injectable } from "@nestjs/common";
import { IstatementRepo } from "./Istatement.repo";
import { AesCryptoService } from "./AesCryptoService";
import { cryptoProvider } from "./cryptoProvider";

export namespace findall{

    @Injectable()
    export class findall{

        constructor(private readonly IstatementRepo:IstatementRepo, private readonly cryptoService:cryptoProvider){}

        public async execute(){
                const statements =  await this.IstatementRepo.findAll();
                
               
                
                const decryptedStatements = statements.map( 
                    statement => {

                         console.log(statement.credit,"che")
                        const document = this.cryptoService.dencrypt(statement?.document)
                        const creditcard = this.cryptoService.dencrypt(statement?.credit)

                        return {
                            ...statement,
                            document,
                            creditcard
                        }
                    }

                   
                   
                )

                   return decryptedStatements
        }
    }
}