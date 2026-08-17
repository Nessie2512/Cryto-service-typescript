import { IstatementRepo } from "./Istatement.repo"
import { Statement } from "./statement.entity";
import { PrismaService } from "./prisma/prisma.service";
import { statementMapper } from "./statement.Mapper";


export class statementPrisma implements IstatementRepo{

    constructor(private readonly prismaService: PrismaService){}
    
    public async create(newStatement: Statement): Promise<void> {
        
        const entityToTable = statementMapper.toTable(newStatement);

        await this.prismaService.statement.create({
            data:{

                uuid: entityToTable.uuid,
                document: entityToTable.document,
                creditcard: entityToTable.creditcard,
                value: entityToTable.valeu
            }
        })
        
        
    }

    public async findAll(): Promise<any[]> {

        const rawStatements = await this.prismaService.statement.findMany();
        const statements = rawStatements.map( statement => statementMapper.toEntity(statement));
        return statements;
    }
}