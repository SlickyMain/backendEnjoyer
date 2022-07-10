import { Module } from "@nestjs/common";
import { SkillController } from "./skills.controller";
import { SkillsService } from "./skills.service";

@Module({
    controllers: [SkillController],
    providers: [SkillsService]
})
export class SkillsModule {

}