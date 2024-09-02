import { FaTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const List = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item" id={item.id}>
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        htmlFor={item.id}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
      />
    </li>
  );
};
List.propTypes = {
  item: PropTypes.object,
  handleDelete: PropTypes.func,
  handleCheck: PropTypes.func,
};
export default List;
