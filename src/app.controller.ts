import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateUserBody } from './dtos/create-user-body';
import { UserRespository } from './repositories/user-repository';

@Controller('user')
export class AppController {
  constructor(private userRepository: UserRespository) {}

  @Post()
  async createUser(@Body() body: CreateUserBody) {
    const { name, cel } = body;

    const user = await this.userRepository.create(name, cel);

    return user;
  }
}
