import { IstatementRepo } from "./Istatement.repo"
import { Statement } from "./statement.entity";
import { PrismaService } from "./prisma/prisma.service";


export class statementPrisma implements IstatementRepo{
    
    create(newStatement: Statement): Promise<void> {
        
        const entityToTable = 
        
    }

    findAll(): Promise<any[]> {
        
    }
}