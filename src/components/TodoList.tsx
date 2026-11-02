import type { ReactNode } from 'react';

import s from '../styles/todo.module.scss';
import type { TodoListItemViewModel } from '../types/todo';
import TodoItem from './TodoItem';

interface TodoListProps {
  items: TodoListItemViewModel[];
  emptyMessage: string;
}

const TodoList = ({ items, emptyMessage }: TodoListProps) => {
  if (items.length === 0) {
    return <p className={s.todoEmpty}>{emptyMessage}</p>;
  }

  const firstDoneIndex = items.findIndex((item) => item.todo.completed);
  const hasBothGroups = firstDoneIndex > 0;
  const rows: ReactNode[] = [];

  items.forEach((item, index) => {
    if (hasBothGroups && index === firstDoneIndex) {
      rows.push(
        <li key="group-done" className={s.todoGroup} aria-hidden="true">
          Выполнено
        </li>,
      );
    }
    rows.push(<TodoItem key={item.todo.id} item={item} />);
  });

  return <ul className={s.todoList}>{rows}</ul>;
};

export default TodoList;
