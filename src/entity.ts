import { randomUUID } from "crypto"


export class entity<props>{
    private UUid:string
    private createdAt:Date
    private editAt?:Date
    private entityProps:props

    protected constructor(props:props, id?:string){
        this.UUid = id ?? randomUUID()
        this.entityProps = props
        this.createdAt = new Date(); 
    }

    public get Id(){
        return this.UUid;
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