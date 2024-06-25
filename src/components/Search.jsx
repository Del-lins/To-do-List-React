import PropTypes from "prop-types";

import { DivSearch } from "../styles/SearchStyled";

const Search = ({ search, setSearch }) => {
  return (
    <DivSearch>
      <h2>Pesquisar</h2>
      <input
        type="text"
        placeholder="Pesquisar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </DivSearch>
  );
};

Search.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Search;
