
export abstract class IstatementRepo{
    abstract create(document:string, credit:string, value:number):Promise<void>
    abstract findAll():Promise<any[]>
}