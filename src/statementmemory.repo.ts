import { Injectable } from "@nestjs/common";
import { IstatementRepo } from "./Istatement.repo";
import { Statement } from "./statement.entity";

Injectable()
export class statementRepository implements IstatementRepo{
    private _statements: Statement[];
    constructor(){
        this._statements = [];
    }
    
    public async create(document: string, credit: string, value: number): Promise<void> {
            
        const newStatement = Statement.create(document, credit, value)
            await this._statements.push(newStatement);
    }

    public async findAll(): Promise<any[]> {       
        return await this._statements;
    }
}