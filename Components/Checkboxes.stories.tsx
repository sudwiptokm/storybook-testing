import Checkboxes from "./Checkboxes";
import { CheckboxesProp } from "../interfaces";
import type { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Brand/Checkboxes",
  component: Checkboxes,
  argTypes: {
    label: {
      name: "Label",
      defaultValue: "Checkbox",
      control: { type: "text" },
    },
    description: {
      name: "Description",
      defaultValue: "Checkbox description is here",
      control: { type: "text" },
    },
    name: {
      name: "Name",
      defaultValue: "checkbox_name",
      control: { type: "text" },
    },
    id: {
      name: "ID",
      defaultValue: "checkbox_id",
      control: { type: "text" },
    },
  },
} as Meta;

const Template: Story<CheckboxesProp> = (args) => (
  <Checkboxes {...args}></Checkboxes>
);

export const Primary: Story<CheckboxesProp> = Template.bind({});
Primary.args = {
  name: "test1",
  id: "id1",
  label: "Test1",
  description: "Testing 1st case",
};

export const Secondary: Story<CheckboxesProp> = Template.bind({});
Secondary.args = {
  name: "test2",
  id: "id2",
  label: "Test2",
  description: "Testing 2nd case",
};
