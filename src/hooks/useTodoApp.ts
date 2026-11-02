import { useMemo, useState } from 'react';

import type { Filter, Todo, TodoFilterOption, TodoListItemViewModel } from '../types/todo';
import { remainingLabel } from '../utils/pluralize';
import { getTodoEmptyMessage } from '../utils/todo';
import useTodoInput from './useTodoInput';
import { useTodos } from './useTodos';

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Все' },
  { value: 'active', label: 'Активные' },
  { value: 'completed', label: 'Выполненные' },
];

const useTodoApp = () => {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();
  const input = useTodoInput({ onAdd: addTodo });
  const [filter, setFilter] = useState<Filter>('all');

  const counts = useMemo(() => {
    const completed = todos.filter((todo) => todo.completed).length;
    return {
      all: todos.length,
      active: todos.length - completed,
      completed,
    };
  }, [todos]);

  const visibleTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return [
          ...todos.filter((todo) => !todo.completed),
          ...todos.filter((todo) => todo.completed),
        ];
    }
  }, [todos, filter]);

  const listItems = useMemo<TodoListItemViewModel[]>(
    () =>
      visibleTodos.map((todo: Todo) => ({
        todo,
        onToggle: () => toggleTodo(todo.id),
        onRemove: () => removeTodo(todo.id),
      })),
    [visibleTodos, toggleTodo, removeTodo],
  );

  const filterOptions = useMemo<TodoFilterOption[]>(
    () =>
      FILTERS.map((option) => ({
        ...option,
        count: counts[option.value],
        isActive: filter === option.value,
        onSelect: () => setFilter(option.value),
      })),
    [counts, filter],
  );

  return {
    input,
    listItems,
    emptyMessage: getTodoEmptyMessage(filter, todos.length > 0),
    filterOptions,
    remaining: remainingLabel(counts.active),
  };
};

export default useTodoApp;
