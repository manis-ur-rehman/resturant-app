"use client";

import { useRouter } from "next/navigation";

const Button = (props: {
  type: "button" | "submit" | "reset";
  disabled: boolean;
  label: string;
  className: string;
  parentClass: string;
}) => {
  const router = useRouter();
  const { label, parentClass, ...restOfProps } = props;
  return (
    <div className={parentClass}>
      <button
        {...restOfProps}
        onClick={() => {
          if (label === "Go to back") {
            router.back();
          }
        }}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
