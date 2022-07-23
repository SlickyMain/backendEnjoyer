import { Injectable } from "@nestjs/common";

@Injectable()
export class SkillsService {
    async GetAllSkills() {
        return "You got all skills"
    }

    async GetOne() {
        return "Java script"
    }
}