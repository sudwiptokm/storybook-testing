import * as React from "react";
// import { composeStories } from "@storybook/testing-react";
import { mount } from "@cypress/react";
// import "../../styles/globals.css";
// import * as stories from "../../Components/Button.stories";
import { Button } from "../../Components/Button";

describe("Hey there", () => {
  it("works", () => {
    mount(<Button />);
  });
});
