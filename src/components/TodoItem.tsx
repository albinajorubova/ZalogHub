import { memo } from 'react';

import s from '../styles/todo.module.scss';
import type { TodoListItemViewModel } from '../types/todo';

interface TodoItemProps {
  item: TodoListItemViewModel;
}

const TodoItem = ({ item }: TodoItemProps) => {
  const { todo, onToggle, onRemove } = item;

  return (
    <li className={s.todoItem}>
      <label className={s.todoLabel}>
        <input
          className={s.todoCheckbox}
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
        />
        <span className={s.todoCheckboxBox} aria-hidden="true">
          <svg
            className={s.todoTick}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5.2 12.6C6.6 13.9 8.1 15.5 9.7 17.5C12.2 12.9 15.1 9 18.9 6" pathLength="1" />
          </svg>
        </span>
        <span className={`${s.todoText} ${todo.completed ? s.todoTextDone : ''}`}>
          <span className={s.todoInk}>{todo.text}</span>
        </span>
      </label>

      <button
        type="button"
        className={s.todoRemove}
        onClick={onRemove}
        aria-label={`Удалить задачу «${todo.text}»`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 7h14M10 11v6M14 11v6M9 7V5h6v2M7 7l1 12h8l1-12" />
        </svg>
      </button>
    </li>
  );
};

export default memo(TodoItem);
