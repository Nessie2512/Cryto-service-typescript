import { Statement } from "./statement.entity";

export abstract class IstatementRepo{
    abstract create(newStatement:Statement):Promise<void>
    abstract findAll():Promise<any[]>
}