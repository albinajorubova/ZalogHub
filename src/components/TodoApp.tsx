import useTodoApp from '../hooks/useTodoApp';
import s from '../styles/todo.module.scss';
import Filters from './TodoFilters';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp = () => {
  const { input, listItems, emptyMessage, filterOptions, remaining } = useTodoApp();

  return (
    <main className={s.todoPage}>
      <div className={s.todoCard}>
        <TodoHeader />
        <TodoInput {...input} />
        <section className={s.todoPanel} aria-label="Список задач">
          <TodoList items={listItems} emptyMessage={emptyMessage} />
          <Filters options={filterOptions} remaining={remaining} />
        </section>
      </div>
    </main>
  );
};

export default TodoApp;
