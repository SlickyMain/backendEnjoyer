import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { AppModule } from "./app.module"

const start = async () => {
	try {
		const PORT = process.env.PORT || 5000
		const app = await NestFactory.create(AppModule)
		const config = new DocumentBuilder()
			.setTitle("Dream startup, lol")
			.setDescription("Documentation of API")
			.setVersion("0.0.1")
			.addTag("Made by @SlickyMain")
			.build()
		const document = SwaggerModule.createDocument(app, config)
		SwaggerModule.setup("/api/docs", app, document)
		app.listen(PORT, () => { console.log(`Working on port ${PORT}`) })
	} catch (error) {
		console.log(error)
	}
}

start()