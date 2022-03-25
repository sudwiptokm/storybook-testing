import * as React from "react";
import { composeStories } from "@storybook/testing-react";
import { mount } from "@cypress/react";
import * as stories from "../../Components/BreadCrumbs.stories";

// compile the "Primary" story with the library
const { Primary, Secondary } = composeStories(stories);

it("Primary Check", () => {
  mount(<Primary />);
  cy.contains("Project Nero");
  cy.contains("Project Virj").should("not.exist");
  cy.get("li").should("have.length", 3);
});

it("Secondary Check", () => {
  // and mount the story using @cypress/react library
  mount(<Secondary />);
  cy.contains("Project Virj");
  cy.get("li").should("have.length", 5);
});
