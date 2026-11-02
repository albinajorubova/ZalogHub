import s from '../styles/todo.module.scss';
import type { TodoFilterOption } from '../types/todo';

interface TodoFiltersProps {
  options: TodoFilterOption[];
  remaining: string;
}

const TodoFilters = ({ options, remaining }: TodoFiltersProps) => {
  return (
    <footer className={s.todoFooter}>
      <p className={s.todoCounter} aria-live="polite">
        {remaining}
      </p>
      <fieldset className={s.todoFilters}>
        <legend className={s.visuallyHidden}>Фильтр задач</legend>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`${s.todoFilter} ${option.isActive ? s.todoFilterActive : ''}`}
            aria-pressed={option.isActive}
            onClick={option.onSelect}
          >
            {option.label}
            <span className={s.todoFilterCount}>{option.count}</span>
          </button>
        ))}
      </fieldset>
    </footer>
  );
};

export default TodoFilters;
