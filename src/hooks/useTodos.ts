import { useCallback } from 'react'
import type { Todo } from '../types/todo'
import { createId } from '../utils/id'
import { useLocalStorage } from './useLocalStorage'

const STORAGE_KEY = 'todo-app:todos'

function isTodoList(value: unknown): value is Todo[] {
  return (
    Array.isArray(value) &&
    value.every(
      (item: unknown) =>
        typeof item === 'object' &&
        item !== null &&
        'id' in item &&
        typeof item.id === 'string' &&
        'text' in item &&
        typeof item.text === 'string' &&
        'completed' in item &&
        typeof item.completed === 'boolean',
    )
  )
}

export function useTodos() {
  const [todos, setTodos] = useLocalStorage<Todo[]>(
    STORAGE_KEY,
    [],
    isTodoList,
  )

  const addTodo = useCallback(
    (rawText: string): boolean => {
      const text = rawText.trim()
      if (!text) return false

      setTodos((previous) => [
        { id: createId(), text, completed: false },
        ...previous,
      ])
      return true
    },
    [setTodos],
  )

  const toggleTodo = useCallback(
    (id: string) => {
      setTodos((previous) =>
        previous.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        ),
      )
    },
    [setTodos],
  )

  const removeTodo = useCallback(
    (id: string) => {
      setTodos((previous) => previous.filter((todo) => todo.id !== id))
    },
    [setTodos],
  )

  return { todos, addTodo, toggleTodo, removeTodo }
}
