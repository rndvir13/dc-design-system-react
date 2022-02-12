import PropTypes from "prop-types";
import Icon, { availableIcons } from "./icon";
import cn from "classnames";

const Input = ({
  label,
  helperText,
  error,
  disabled,
  size,
  fullWidth,
  multiline,
  value,
  startIcon,
  endIcon,
  ...rest
}) => {
  const Comp = multiline ? "textarea" : "input";
  return (
    <div
      className={`group ${
        fullWidth ? "flex" : "inline-flex max-w-[200px]"
      } flex-col gap-[4px]`}
    >
      <label
        className={cn("text-[12px]", {
          "text-neutral-50 group-focus-within:text-primary-10":
            !disabled && !error,
          "text-danger-10 group-hover:text-neutral-50 group-focus-within:group-hover:text-danger-10":
            error && !disabled,
          "text-neutral-50": disabled,
        })}
      >
        {label}
      </label>
      <div
        className={cn(
          "box-border flex items-center rounded-[8px] border-[1px] px-[12px]",
          {
            "border-neutral-30 text-neutral-50 group-focus-within:border-primary-10 group-hover:border-neutral-50 group-focus-within:group-hover:border-primary-10":
              !(error || disabled),
            "border-danger-10 text-neutral-50 group-focus-within:border-danger-10 group-hover:border-neutral-50 group-focus-within:group-hover:border-danger-10":
              error && !disabled,
            "border-neutral-10 bg-[#F2F2F2] text-neutral-20": disabled,
          },
          `${size == "sm" ? "py-[10px]" : "py-[18px]"}`
        )}
      >
        <Comp
          className={`text-[inherit] peer order-2 w-full bg-transparent placeholder-neutral-30 outline-none ${
            multiline && "resize-none"
          }`}
          value={value}
          disabled={disabled}
          {...rest}
        />
        {startIcon && (
          <Icon
            className="text-[inherit] peer-focus:text-[inherit] order-1 mr-[15px] text-[20px] leading-[20px] peer-placeholder-shown:text-neutral-30"
            name={startIcon}
          />
        )}
        {endIcon && (
          <Icon
            className="text-[inherit] peer-focus:text-[inherit] order-3 ml-[15px] text-[20px] leading-[20px] peer-placeholder-shown:text-neutral-30"
            name={endIcon}
          />
        )}
      </div>
      <div
        className={cn("text-[10px] leading-[14px]", {
          "text-neutral-30 group-focus-within:text-primary-5":
            !disabled && !error,
          "text-danger-5 group-hover:text-neutral-30 group-focus-within:group-hover:text-danger-5":
            error && !disabled,
          "text-neutral-30": disabled,
        })}
      >
        {helperText}
      </div>
    </div>
  );
};

Input.defaultProps = {
  label: "Label",
  value: "",
  size: "md",
  error: false,
  fullWidth: false,
  multiline: false,
  placeholder: "Placeholder",
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  helperText: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md"]),
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  startIcon: PropTypes.oneOf(availableIcons),
  endIcon: PropTypes.oneOf(availableIcons),
  onChange: PropTypes.func,
};

export default Input;
