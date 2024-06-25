import PropTypes from "prop-types";

import { DivTodo, ButtonComplete, ButtonRemove } from "../styles/TodoStyles";

const Todo = ({ todo, removeTodo, completTodo }) => {
  return (
    <DivTodo style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <ButtonComplete onClick={() => completTodo(todo.id)}>
          Completar
        </ButtonComplete>

        <ButtonRemove onClick={() => removeTodo(todo.id)}>x</ButtonRemove>
      </div>
    </DivTodo>
  );
};

Todo.propTypes = {
  todo: PropTypes.string.isRequired,
  removeTodo: PropTypes.func.isRequired,
  completTodo: PropTypes.func.isRequired,
};

export default Todo;
