export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export type Filter = 'all' | 'active' | 'completed';

export interface TodoListItemViewModel {
  todo: Todo;
  onToggle: () => void;
  onRemove: () => void;
}

export interface TodoFilterOption {
  value: Filter;
  label: string;
  count: number;
  isActive: boolean;
  onSelect: () => void;
}
