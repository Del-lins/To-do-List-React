import PropTypes from "prop-types";

import { DivFilter } from "../styles/FilterStyled.jsx";

const Filter = ({ filter, setFilter, setSorte }) => {
  return (
    <DivFilter>
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>
        <div>
          <p>Order alfabética:</p>
          <button onClick={() => setSorte("Asc")}>Asc</button>
          <button onClick={() => setSorte("Desc")}>Desc</button>
        </div>
      </div>
    </DivFilter>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  setSorte: PropTypes.func.isRequired,
};

export default Filter;
