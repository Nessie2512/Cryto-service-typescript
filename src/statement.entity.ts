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

    public static create(document:string,creditCard:string, value:number){
        
    }


    private isEmpty(statementProps:statementProps){   

        const StatementPropss:Array< keyof statementProps> = ["document", "creditcard", "value"];

        for(const field of StatementPropss ){
              
            
        }
    }
}