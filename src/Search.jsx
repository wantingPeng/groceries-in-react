import PropTypes from "prop-types";

const Search = ({ setSearch, handleSetSearch }) => {
  return (
    <form className="searchForm">
      <input
        type="text"
        id="search"
        placeholder="Search Items"
        value={setSearch}
        onChange={handleSetSearch}
      />
    </form>
  );
};
Search.propTypes = {
  setSearch: PropTypes.string,
  handleSetSearch: PropTypes.func,
};
export default Search;
