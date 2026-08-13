import { Injectable } from "@nestjs/common";
import { IstatementRepo } from "./Istatement.repo";

Injectable()
export class statementRepository implements IstatementRepo{
    private _statements: any[];
    constructor(){
        this._statements = [];
    }
    
    public async create(document: string, credit: string, value: number): Promise<void> {
            await this._statements.push({document, credit, value});
    }

    public async findAll(): Promise<any[]> {       
        return await this._statements;
    }
}