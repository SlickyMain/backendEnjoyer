import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface userCreationAttr {
    email: string,
    password: string
}

@Table({
    tableName: "users"
})
export class User extends Model<User, userCreationAttr> {

	@ApiProperty({example: "1", description: "Unique ID of User"})
    @Column({ autoIncrement: true, primaryKey: true, type: DataType.INTEGER, unique: true })
    id: number

	@ApiProperty({example: "Eugene", description: "First name if user set him"})
    @Column({ type: DataType.STRING, allowNull: true })
    first_name: string

	@ApiProperty({example: "Popov", description: "Last name if user set him"})
    @Column({ type: DataType.STRING, allowNull: true })
    last_name: string

	@ApiProperty({example: "john@doe.com", description: "Email address"})
    @Column({ type: DataType.STRING, allowNull: false, unique: true })
    email: string

	@ApiProperty({example: "22.02.1999", description: "User's born date"})
    @Column({ type: DataType.DATE, allowNull: true })
    born: Date

	@ApiProperty({example: "3 years", description: "How long user coding"})
    @Column({ type: DataType.DATE, allowNull: true })
    coding: Date

    @Column({ type: DataType.STRING, allowNull: false })
    password: string
}