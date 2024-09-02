import { FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";
import { useRef } from "react";

const AddItem = ({ newInput, handelSetNewInput, handleSubmit }) => {
  const inputRef = useRef(); //useRef(), you create a new ref object that can be attached to a DOM element via the ref attribute in JSX

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      {/* onsubmit event */}
      <label htmlFor="addItem"> </label>
      <input
        type="text"
        id="addItem"
        ref={inputRef} //attach the ref to a DOM element by setting the ref attribute to the ref object.
        placeholder="addItem"
        required
        value={newInput}
        onChange={handelSetNewInput}
      />
      <button
        type="submit"
        aria-label="addItem"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};
AddItem.propTypes = {
  handelSetNewInput: PropTypes.func,
  newInput: PropTypes.string,
  handleSubmit: PropTypes.func,
};

export default AddItem;
