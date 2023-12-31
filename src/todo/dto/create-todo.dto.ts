// /nest-todo-app/src/todo/dto/create-todo.dto.ts

export class CreateTodoDTO {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly isDone: boolean;
}
