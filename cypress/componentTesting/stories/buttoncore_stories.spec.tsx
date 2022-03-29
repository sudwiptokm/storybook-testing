import * as React from "react";
import { composeStories } from "@storybook/testing-react";
import { mount } from "@cypress/react";
import * as stories from "../../../Components/ButtonFromCore.stories";
import "tailwindcss/tailwind.css";

// compile the "Primary" story with the library
const { Primary, Secondary } = composeStories(stories);

it("Primary Check", () => {
  // and mount the story using @cypress/react library
  mount(<Primary />);

  // then run our tests
  cy.contains("Core");
  cy.get("button").click();
});

it("Secondary Check", () => {
  // and mount the story using @cypress/react library
  mount(<Secondary />);

  // then run our tests
  cy.contains("Core Sec");
  cy.get("button").click();
  cy.get("button").should("have.class", "bg-darkblue");
});
