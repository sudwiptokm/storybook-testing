import SimpleInput from "./SimpleInput";
import type { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Brand/SimpleInput",
  component: SimpleInput,
  argTypes: {
    label: {
      name: "Label",
      defaultValue: "Simple Input",
      control: { type: "text" },
    },
    type: {
      name: "type",
      defaultValue: "text",
      control: { type: "text" },
    },
    name: {
      name: "Name",
      defaultValue: "simple_input",
      control: { type: "text" },
    },
    id: {
      name: "ID",
      defaultValue: "simple_input_id",
      control: { type: "text" },
    },
  },
} as Meta;

const Template: Story = (args) => <SimpleInput {...args}></SimpleInput>;

export const Primary: Story = Template.bind({});
Primary.args = {
  name: "test1",
  id: "id1",
  label: "Test1",
  type: "text",
};

export const Secondary: Story = Template.bind({});
Secondary.args = {
  name: "test2",
  id: "id2",
  label: "Test2",
  type: "password",
};
