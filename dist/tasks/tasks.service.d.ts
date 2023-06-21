import { CreateTask, UpdateTask } from './dto/tasks.dto';
import { Task } from './tasks.entity';
export declare class TasksService {
    private tasks;
    getAllTask(): Task[];
    createTask({ title, description }: CreateTask): number;
    deleteTask(id: string): Task[];
    getTaskById(id: string): Task;
    updateTask(id: string, updatedTask: UpdateTask): Task;
}
