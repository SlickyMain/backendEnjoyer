import { Controller, Get } from "@nestjs/common";

@Controller("/skills")
export class SkillController {

    @Get()
    GetAllSkills() {
        return "get all"
    }

    GetOne() {

    }
}
