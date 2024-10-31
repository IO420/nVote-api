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
import { LoginDto, UserDto } from './dto/user.dto';
import { Authguard } from 'src/guard/auth.guard';
import { Roles } from 'src/guard/roles.decorator';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/guard/roles.guard';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all users' })
  @ApiResponse({ status: 200, description: 'All users retrieved successfully' })
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a user by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User retrieved successfully' })
  @ApiResponse({ status: 404, description: 'User not found' })
  getOneUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUsers(id);
  }

  @Post('name')
  @ApiOperation({ summary: 'Retrieve user by name' })
  @ApiBody({ description: 'Name of the user', type: String })
  @ApiResponse({ status: 200, description: 'User retrieved successfully' })
  PostUserByName(@Body('name') name: string) {
    return this.userService.getUsersByName(name);
  }

  @UseGuards(Authguard, RolesGuard)
  @Post('registerUser')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ description: 'User registration', type: UserDto })
  @ApiResponse({ status: 201, description: 'User registered successfully' })
  registerUser(@Body() data: UserDto) {
    return this.userService.registerUser(data);
  }

  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiBody({ description: 'User login data', type: LoginDto })
  @ApiResponse({ status: 200, description: 'User logged in successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  login(@Body() data: UserDto) {
    return this.userService.login(data);
  }
}
