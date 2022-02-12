import PropTypes from "prop-types";

export const availableIcons = [
  "local_grocery_store",
  "add_shopping_cart",
  "home",
  "settings",
  "search",
  "account",
];

const Icon = ({ name, className }) => {
  return <span className={`material-icons-round ${className}`}>{name}</span>;
};

Icon.defaultProps = {
  name: "home",
};

Icon.propTypes = {
  name: PropTypes.oneOf(availableIcons),
};

export default Icon;
