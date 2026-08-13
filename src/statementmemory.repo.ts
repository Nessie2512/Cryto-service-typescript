import { Injectable } from "@nestjs/common";
import { IstatementRepo } from "./Istatement.repo";
import { Statement } from "./statement.entity";

Injectable()
export class statementRepository implements IstatementRepo{
    private _statements: Statement[];
    constructor(){
        this._statements = [];
    }
    
    public async create(Statement:Statement): Promise<void> {
            await this._statements.push(Statement);
    }

    public async findAll(): Promise<any[]> {       
        return await this._statements;
    }
}