import React from "react";
import cn from "classnames";

export enum b2TypeEnum {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset",
}
export enum b2SizeEnum {
  S = "small",
  M = "medium",
  L = "large",
}

export interface b2Props {
  label?: string;
  type?: b2TypeEnum;
  isAlternative?: boolean;
  size?: b2SizeEnum;
}

export const B2: React.FC<b2Props> = ({
  label = "Click",
  type = b2TypeEnum.BUTTON,
  isAlternative,
  size = b2SizeEnum.L,
}) => {
  // This block is for Demo
  // let padding = "px-5 py-3";
  // if (size === b2SizeEnum.S) padding = "px-3 py-2";
  // if (size === b2SizeEnum.L) padding = "px-6 py-3";

  return (
    <div>
      <button
        type={type}
        className={cn({
          "inline-flex items-center justify-center border border-transparent text-base leading-6 font-medium rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out":
            true,
          "px-6 py-3": size === b2SizeEnum.L,
          "px-3 py-2": size === b2SizeEnum.S,
          "px-4 py-3": size === b2SizeEnum.M,
          "text-white bg-indigo-600 hover:bg-indigo-500": !isAlternative,
          "text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:border-indigo-300":
            isAlternative,
        })}
      >
        {label}
      </button>
    </div>
  );
};
