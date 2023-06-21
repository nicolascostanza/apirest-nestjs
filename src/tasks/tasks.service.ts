import { Injectable } from '@nestjs/common';
import { CreateTask, UpdateTask } from './dto/tasks.dto';
import { Task, TaskStatus } from './tasks.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Task 1 description',
      status: TaskStatus.DONE,
    },
  ];
  getAllTask() {
    return this.tasks;
  }
  createTask({ title, description }: CreateTask) {
    const newTask = {
      id: new Date().toISOString(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    return this.tasks.push(newTask);
  }
  deleteTask(id: string): Task[] {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  updateTask(id: string, updatedTask: UpdateTask): Task {
    const taskFinded = this.getTaskById(id);

    const newTask = Object.assign(taskFinded, updatedTask);

    this.tasks.map((task) => {
      task.id === newTask.id ? newTask : task;
    });
    return newTask;
  }
}
