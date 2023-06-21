export declare enum TaskStatus {
    PENDING = "PENDING",
    DONE = "DONE",
    IN_PROGRESS = "IN_PROGRESS"
}
export declare class Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}
