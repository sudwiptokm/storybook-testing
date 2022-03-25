import React from "react";
import { mount } from "@cypress/react";
import Home from "../../pages/index";

it("Renders page component", () => {
  mount(<Home />);
  cy.contains("Hi there");
});
