import { PrismaService } from 'src/database/prisma.service';
import { UserRespository } from '../user-repository';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements UserRespository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, cel: string): Promise<void> {
    await this.prisma.user.create({
      data: {
        id: randomUUID(),
        name: name,
        cel: cel,
      },
    });
  }
}
