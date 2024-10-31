import { HttpException, Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto, UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getAllUsers() {
    return this.userRepository.find({ order: { name: 'ASC' } });
  }

  getUsers(id: number) {
    return this.userRepository.findOne({ where: { id_user: id } });
  }

  async getUsersByName(name: string) {
    return this.userRepository.findOne({ where: { name } });
  }

  async registerUser(data: UserDto) {
    const { name } = data;
    const user = await this.getUsersByName(name);

    if (user) {
      throw new HttpException('user already exist', 403);
    }

    const password = this.generatePassword();
    const hashedpassword = await hash(password, 10);

    await this.userRepository.save(
      this.userRepository.create({
        ...data,
        password: hashedpassword,
        type: 2,
      }),
    );

    return { message: 'register successfully',password };
  }

  async login(data: LoginUserDto) {
    const { name, password } = data;
    const user = await this.userRepository.findOne({ where: { name } });
    if (!user) {
      throw new HttpException('user name not fount', 404);
    }

    const checkPassword = await compare(password, user.password);
    if (!checkPassword) {
      throw new HttpException('invalid password', 404);
    }

    const payload = {
      id_user: user.id_user,
      user: user.name,
    };

    const token = this.jwtService.sign(payload, {
      expiresIn: '7h',
    });

    return { token };
  }

  generatePassword() {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array(8)
      .fill('')
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join('');
  }
}
