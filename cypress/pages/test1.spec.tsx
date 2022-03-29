import React from "react";
import { mount } from "@cypress/react";
import Home from "../../pages/index";
import "tailwindcss/tailwind.css";

it("Renders page component", () => {
  mount(<Home />);
  cy.contains("Hi there");
});
