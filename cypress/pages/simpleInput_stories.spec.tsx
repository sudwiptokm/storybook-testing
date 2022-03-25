import * as React from "react";
import { composeStories } from "@storybook/testing-react";
import { mount } from "@cypress/react";
import * as stories from "../../Components/SimpleInput.stories";

// compile the "Primary" story with the library
const { Primary, Secondary } = composeStories(stories);

it("Check Values text field", () => {
  // and mount the story using @cypress/react library
  mount(<Primary />);
  // then run our tests
  cy.get("input").click().type("Hello, World");
  cy.get("input").should("have.value", "Hello, World");
});

it("Check Values password field", () => {
  // and mount the story using @cypress/react library
  mount(<Secondary />);
  // then run our tests
  cy.get("input").click().type("Hello, World");
  cy.get("input").should("have.value", "Hello, World");
  cy.get("input").should("have.attr", "type", "password");
});
