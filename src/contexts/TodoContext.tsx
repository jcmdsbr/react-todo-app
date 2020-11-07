import React, { createContext } from "react";
import { Todo } from "../models/Todo";
import { TodoContextType } from "./TodoContextType";

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  add: () => {},
  remove: () => {},
  toggle: () => {},
});

const todos = [
  { id: 1, title: "Ir ao supermercado", done: true },
  { id: 2, title: "Ir a academia", done: false },
];
const add = (title: string) => {
  console.log(`Add task ${title}`);
};
const remove = (todo: Todo) => {
  console.log(todo);
};
const toggle = (todo: Todo) => {
  console.log(todo);
};

const TodoProvider = (props: any) => {
  return (
    <TodoContext.Provider value={{ todos, add, remove, toggle }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
