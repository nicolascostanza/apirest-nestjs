import { CreateTask, UpdateTask } from './dto/tasks.dto';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getAll(): import("./tasks.entity").Task[];
    create(newTask: CreateTask): number;
    deleteTask(id: string): import("./tasks.entity").Task[];
    updateTask(id: string, newTask: UpdateTask): import("./tasks.entity").Task;
}
