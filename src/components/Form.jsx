import PropTypes from "prop-types";

import { useState } from "react";
import { DivForm } from "../styles/FormStyles";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
    console.log(value, category);
  };

  return (
    <DivForm>
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </DivForm>
  );
};

Form.propTypes = {
  addTodo: PropTypes.string.isRequired,
};

export default Form;
