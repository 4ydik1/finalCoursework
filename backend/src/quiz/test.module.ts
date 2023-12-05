import {Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { Test } from './test.model';

@Module({
    controllers: [TestController],
    providers: [TestService],
    imports: [
        SequelizeModule.forFeature([Test])
    ],
})
export class TestModule {
}
