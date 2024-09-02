import Itemlist from "./Itemlist";
import PropTypes from "prop-types";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <Itemlist
          items={items}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
    </main>
  );
};
Content.propTypes = {
  items: PropTypes.array || null,
  handleDelete: PropTypes.func,
  handleCheck: PropTypes.func,
};

export default Content;
