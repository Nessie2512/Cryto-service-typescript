import { error } from "console";
import { entity } from "./entity";

type statementProps = {
   "document":string,
   "creditcard":string
   "value":number
}


export class Statement extends entity<statementProps>{
              
    private constructor(data:statementProps,id?:string){
           super(data,id)
    }

    public static create(document:string,creditcard:string, value:number,id?:string){
        Statement.isEmpty({document,creditcard,value})
        return new Statement({document,creditcard,value},id)
    }


    static isEmpty(statementProps:statementProps){   

        const StatementPropss:Array< keyof statementProps> = ["document", "creditcard", "value"];

        for(const field of StatementPropss ){
            if(statementProps[field] === "" || statementProps[field] === null || statementProps[field] === undefined){              
                throw new error(`Please fill in the ${field} field, and try again.`)
            }
        }
    }

    
}