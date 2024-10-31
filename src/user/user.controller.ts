import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { Authguard } from 'src/guard/auth.guard';
import { Roles } from 'src/guard/roles.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getOneUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUsers(id);
  }

  @Post('name')
  PostUserByName(@Body('name') name: string) {
    return this.userService.getUsersByName(name);
  }

  @Post('registerUser')
  registerUser(@Body() data: UserDto) {
    return this.userService.registerUser(data);
  }

  @Post('login')
  login(@Body() data: UserDto) {
    return this.userService.login(data);
  }
}
