import { TaskStatus } from '../tasks.entity';
import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

// tipamos el body que viene por request del createTask y en updateTask
export class CreateTask {
  // validaciones que podemos hacer
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  description: string;
}

export class UpdateTask {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  @IsIn(Object.values(TaskStatus))
  status?: TaskStatus;
}
