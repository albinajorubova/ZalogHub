import s from '../styles/todo.module.scss';

const TodoHeader = () => {
  return (
    <header className={s.todoHeader}>
      <h1 className={s.todoTitle}>To-do list</h1>
    </header>
  );
};

export default TodoHeader;
