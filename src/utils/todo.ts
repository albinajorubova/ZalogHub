import type { Filter } from '../types/todo';

export const getTodoEmptyMessage = (filter: Filter, hasAnyTodos: boolean): string => {
  if (!hasAnyTodos) return 'Задач пока нет. Добавьте первую выше.';
  if (filter === 'active') return 'Активных задач нет — всё сделано.';
  if (filter === 'completed') return 'Выполненных задач пока нет.';
  return 'Задач нет.';
};
