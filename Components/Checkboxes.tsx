import * as React from "react";
import { CheckboxesProp } from "../interfaces";

const Checkboxes = ({ name, id, label, description }: CheckboxesProp) => (
  <fieldset className="space-y-5">
    <legend className="sr-only">Notifications</legend>
    <div className="relative flex items-start">
      <div className="flex items-center h-5">
        <input
          id={id}
          aria-describedby="comments-description"
          name={name}
          type="checkbox"
          className="focus:outline-none-darkblue h-4 w-4 text-darkblue border-darkblue rounded"
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={id} className="font-medium text-black">
          {label}
        </label>
        <p id="description" className="text-gray-dark">
          {description}
        </p>
      </div>
    </div>
  </fieldset>
);

export default Checkboxes;
