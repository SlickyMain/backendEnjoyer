import { Controller, Get } from "@nestjs/common";
import { SkillsService } from "./skills.service";

@Controller("/skills")
export class SkillController {

    constructor(private skillsService: SkillsService) {

    }

    @Get()
    GetAllSkills() {
        return this.skillsService.GetAllSkills()
    }

    GetOne() {
        return this.skillsService.GetOne()
    }
}
