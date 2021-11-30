import {forwardRef, Module} from '@nestjs/common';
import { LoadController } from './load.controller';
import { LoadService } from './load.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Load} from "./load.model";
import {AuthModule} from "../auth/auth.module";
import {Post} from "../posts/posts.model";

@Module({
  controllers: [LoadController],
  providers: [LoadService],
  imports: [
      SequelizeModule.forFeature([Load,  Post]),

      forwardRef(() => AuthModule),
  ],
    exports: [
        LoadService,
    ]
})
export class LoadModule {}
