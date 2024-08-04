import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    try {
      const data = await this.todosService.create({
        ...createTodoDto,
        deadline: createTodoDto.deadline || undefined,
      });
      return {
        status: HttpStatus.OK,
        data,
        type: 'todo',
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  @Get()
  async findAll() {
    try {
      const data = await this.todosService.findAll();
      return {
        status: HttpStatus.OK,
        data,
        type: 'todo',
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const data = await this.todosService.findOne(+id);
      return {
        status: HttpStatus.OK,
        data,
        type: 'todo',
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    try {
      const data = await this.todosService.update(+id, {
        ...updateTodoDto,
        deadline: updateTodoDto.deadline || undefined,
      });
      return {
        status: HttpStatus.OK,
        data,
        type: 'todo',
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const data = await this.todosService.remove(+id);
      return {
        status: HttpStatus.OK,
        data,
        type: 'todo',
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }
}
