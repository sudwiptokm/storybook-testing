import * as React from "react";
import { ButtonProps, ButtonType } from "../interfaces";

export const ButtonFromCore = ({
  type = ButtonType.button,
  icon,
  text = "Click",
  OnClick,
}: ButtonProps) => (
  <button
    type={type}
    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-300 hover:bg-darkblue focus:outline-none focus:ring-1 focus:ring-offset-0"
    onClick={OnClick}
  >
    {icon}
    {text}
  </button>
);

// export default ButtonFromCore;
