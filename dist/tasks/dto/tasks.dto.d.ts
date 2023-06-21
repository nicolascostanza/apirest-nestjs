import { TaskStatus } from '../tasks.entity';
export declare class CreateTask {
    title: string;
    description: string;
}
export declare class UpdateTask {
    title?: string;
    description?: string;
    status?: TaskStatus;
}
