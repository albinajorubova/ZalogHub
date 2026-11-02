import type { ChangeEvent, FormEvent } from 'react';

import s from '../styles/todo.module.scss';

interface TodoInputProps {
  text: string;
  hasError: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const TodoInput = ({ text, hasError, onChange, onSubmit }: TodoInputProps) => {
  return (
    <form className={s.todoForm} onSubmit={onSubmit} noValidate>
      <input
        className={`${s.todoInput} ${hasError ? s.todoInputInvalid : ''}`}
        type="text"
        value={text}
        onChange={onChange}
        placeholder="Что нужно сделать?"
        aria-label="Текст новой задачи"
        aria-invalid={hasError}
        aria-describedby={hasError ? 'todo-error' : undefined}
        autoComplete="off"
      />
      <button className={s.todoAddButton} type="submit">
        Добавить
      </button>
      {hasError && (
        <p id="todo-error" className={s.todoError} role="alert">
          Введите текст задачи
        </p>
      )}
    </form>
  );
};

export default TodoInput;
