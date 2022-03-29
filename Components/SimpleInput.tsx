import * as React from "react";
import { InputProp } from "../interfaces";

const Input = ({ label = "input", type, name, id, placeholder }: InputProp) => (
  <div className="border-darkblue">
    <label htmlFor={label} className="sr-only">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={id}
      className="shadow-sm focus:outline-darkblue focus:border-darkblue block w-full sm:text-sm border-gray-dark p-1"
      placeholder={placeholder}
    />
  </div>
);

export default Input;
