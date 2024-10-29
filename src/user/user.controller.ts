import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginUserDto, UserDto } from './dto/user.dto';
import { Authguard } from 'src/guard/auth.guard';
import { Roles } from 'src/guard/roles.decorator';

@Controller('user')
@UseGuards(Authguard)
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getAllUsers(){
      return this.userService.getAllUsers();
    }

    @Get(':id')
    getOneUser(@Param('id',ParseIntPipe) id:UserDto){
        return this.userService.getUsers(id)
    }

    @Post('registerUser')
    registerUser(@Body() data:UserDto){
      return this.userService.registerUser(data);
    }

    @Post('login')
    login(@Body() data:LoginUserDto){
      return this.userService.login(data);
    }

}
