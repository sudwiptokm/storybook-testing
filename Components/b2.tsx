// import classNames from "classnames";
import React from "react";
import cn from "classnames";

export interface b2Props {
  label: string;
  type: "button" | "submit" | "reset";
  isDisabled: boolean;
  size: "small" | "medium" | "large";
}

function B2({
  label = "Click",
  type = "button",
  isDisabled = false,
  size = "large",
}: b2Props) {
  // let s  = size === "large" ?
  return (
    <div>
      <button
        type={type}
        className={cn({
          "inline-flex items-center justify-center border border-transparent text-base leading-6 font-medium rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out bg-indigo-600 hover:bg-indigo-500 text-white":
            true,
          "bg-red-600": size === "small",
          "px-7 py-6": size === "large",
        })}
        disabled={isDisabled}
      >
        {label}
      </button>
    </div>
  );
}

export default B2;
