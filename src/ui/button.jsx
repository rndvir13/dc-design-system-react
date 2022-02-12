import PropTypes from "prop-types";
import Icon, { availableIcons } from "./icon";

import cn from "classnames";

const Button = ({
  label,
  variant,
  size,
  color,
  disableShadow,
  startIcon,
  endIcon,
  ...props
}) => (
  <button
    {...props}
    className="shadow"
    className={cn(
      "flex items-center rounded-[6px] leading-[20px] disabled:cursor-not-allowed",
      "before:text-[1em] after:text-[1em]",
      {
        "bg-neutral-10 text-neutral-40 shadow-neutral-50/20 hover:bg-neutral-20 disabled:bg-neutral-10 disabled:text-neutral-30":
          variant == "default" && color == "default",
        "bg-primary-10 text-white shadow-primary-10/20 hover:bg-primary-20 disabled:bg-primary-5 disabled:text-opacity-70":
          variant == "default" && color == "primary",
        "bg-secondary-10 text-white shadow-secondary-10/20 hover:bg-secondary-20 disabled:bg-secondary-5 disabled:text-opacity-70":
          variant == "default" && color == "secondary",
        "bg-danger-10 text-white shadow-danger-10/20 hover:bg-danger-20 disabled:bg-danger-5 disabled:text-opacity-70":
          variant == "default" && color == "danger",
        "border-neutral-40 bg-transparent text-neutral-40 hover:bg-neutral-10 disabled:border-neutral-30 disabled:bg-transparent disabled:text-neutral-30":
          (variant == "outline" || variant == "text") && color == "default",
        "border-primary-15 bg-transparent text-primary-15 hover:bg-primary-10/10 disabled:border-primary-5 disabled:bg-transparent disabled:text-primary-5":
          (variant == "outline" || variant == "text") && color == "primary",
        "border-secondary-15 bg-transparent text-secondary-15 hover:bg-secondary-10/10 disabled:border-secondary-5 disabled:bg-transparent disabled:text-secondary-5":
          (variant == "outline" || variant == "text") && color == "secondary",
        "border-danger-15 bg-transparent text-danger-15 hover:bg-danger-10/10 disabled:border-danger-5 disabled:bg-transparent disabled:text-danger-5":
          (variant == "outline" || variant == "text") && color == "danger",
        "border-[1px]": variant == "outline",
        "shadow-sm": variant == "default" && !disableShadow && !props.disabled,
        "px-[0.857em] py-[0.429em]": size == "sm",
        "px-[1.14em]  py-[0.57em]": size == "md",
        "px-[1.57em]  py-[0.786em]": size == "lg",
      }
    )}
  >
    {startIcon && (
      <Icon className="mr-2.5 text-xl leading-[inherit]" name={startIcon} />
    )}
    <span>{label}</span>
    {endIcon && (
      <Icon className="ml-2.5 text-xl leading-[inherit]" name={endIcon} />
    )}
  </button>
);

Button.defaultProps = {
  label: "Default",
  variant: "default",
  color: "default",
  size: "md",
};

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(["default", "outline", "text"]),
  disableShadow: PropTypes.bool,
  disabled: PropTypes.bool,
  startIcon: PropTypes.oneOf(availableIcons),
  endIcon: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.oneOf(["default", "primary", "secondary", "danger"]),
  onClick: PropTypes.func,
};

export default Button;
