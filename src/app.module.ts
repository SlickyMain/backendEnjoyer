import { Module } from "@nestjs/common";
import { SkillsModule } from "./skills/skills.module";
import { SequelizeModule } from "@nestjs/sequelize"
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { AuthModule } from './auth/auth.module';


@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `./env/${process.env.NODE_ENV}.env`
        }),
        SkillsModule,
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User],
            autoLoadModels: true
        }),
        UsersModule,
        AuthModule,
    ]
})
export class AppModule {
    
}
