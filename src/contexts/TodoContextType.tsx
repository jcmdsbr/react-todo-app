import { Todo } from "../models/Todo";

export interface TodoContextType {
  todos: Todo[];
  add(title: string): void;
  remove(todo: Todo): void;
  toggle(todo: Todo): void;
}
