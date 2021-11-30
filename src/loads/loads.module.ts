import {forwardRef, Module} from '@nestjs/common';
import { LoadsService } from './loads.service';
import { LoadsController } from './loads.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";;
import {Load} from "./loads.model";
import {FilesModule} from "../files/files.module";
import {AuthModule} from "../auth/auth.module";
import {UsersModule} from "../users/users.module";

@Module({
  providers: [LoadsService],
  controllers: [LoadsController],
  imports: [
    SequelizeModule.forFeature([User, Load]),
      FilesModule,
    forwardRef(() => AuthModule),
    forwardRef(() => UsersModule)
  ]
})
export class LoadsModule {}
