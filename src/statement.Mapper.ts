import { statement } from "@prisma/client";
import { Statement } from "./statement.entity";

export class statementMapper{

    toEntity(rawData:statement){
        return Statement.create
        (
         rawData.document,
         rawData.creditcard,
         rawData.value,
         rawData.uuid   
        )
    }

    toTable(domianEntity:Statement){
        
        return{

            uuid:domianEntity.UUId,
            document:domianEntity.document,
            creditcard:domianEntity.credit,
            valeu:domianEntity.value

        }
    }
}