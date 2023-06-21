import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTask, UpdateTask } from './dto/tasks.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  // le inyectamos los servicios mediante el constructor de la clase
  constructor(private taskService: TasksService) {}

  @Get()
  getAll() {
    return this.taskService.getAllTask();
  }

  @Post()
  create(@Body() newTask: CreateTask) {
    return this.taskService.createTask(newTask);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() newTask: UpdateTask) {
    return this.taskService.updateTask(id, newTask);
  }
}
