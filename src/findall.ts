import { Injectable } from "@nestjs/common";
import { IstatementRepo } from "./Istatement.repo";

export namespace findall{

    @Injectable()
    export class findall{

        constructor(private readonly IstatementRepo:IstatementRepo){}

        async execute(){
                return this.IstatementRepo.findAll();
        }
    }
}