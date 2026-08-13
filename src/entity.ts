import { randomUUID } from "crypto"


export class entity<props>{
    private id:string
    private createdAt:Date
    private editAt?:Date
    private entityProps:props

    protected constructor(props:props, id?:string){
        this.id = id ?? randomUUID()
        this.entityProps = props
        this.createdAt = new Date(); 
    }

    public get Id(){
        return this.id;
    }

    public get CreatedAt(){
        return this.createdAt;
    }

    
    public get EditAt(){
        return this.editAt;
    }

    protected edit(){
        this.editAt = new Date();
    }
}