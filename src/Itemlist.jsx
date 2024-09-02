import PropTypes from "prop-types";
import List from "./List";

const Itemlist = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <List
          item={item}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
          key={item.id}
        />
      ))}
    </ul>
  );
};

Itemlist.propTypes = {
  items: PropTypes.array,
  item: PropTypes.object,
  handleDelete: PropTypes.func,
  handleCheck: PropTypes.func,
};
export default Itemlist;
