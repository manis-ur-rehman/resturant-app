"use client";

const Button = (props: {
  type: "button" | "submit" | "reset";
  disabled: boolean;
  label: string;
  className: string;
  parentClass: string;
}) => {
  const { label, parentClass, ...restOfProps } = props;
  return (
    <div className={parentClass}>
      <button {...restOfProps}>{label}</button>
    </div>
  );
};

export default Button;
