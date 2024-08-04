import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateTodoDto) {
    return this.prisma.todo.create({ data });
  }

  findAll() {
    return this.prisma.todo.findMany({ orderBy: { id: 'desc' } });
  }

  findOne(id: number) {
    return this.prisma.todo.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateTodoDto) {
    return this.prisma.todo.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.todo.delete({ where: { id } });
  }
}
