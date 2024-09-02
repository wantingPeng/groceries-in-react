import PropTypes from "prop-types";

const Footer = ({ length }) => {
  return (
    <footer>
      <p>
        {length} list {length <= 1 ? "item" : "items"}
      </p>
    </footer>
  );
};
Footer.propTypes = {
  length: PropTypes.number,
};
export default Footer;
