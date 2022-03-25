import { ButtonFromCore } from "./ButtonFromCore";
import { ButtonType, ButtonProps } from "../interfaces";

import type { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Brand/ButtonFromCore",
  component: ButtonFromCore,
  argTypes: {
    type: {
      options: [ButtonType.button, ButtonType.reset, ButtonType.submit],
      control: { type: "radio" },
    },
    text: {
      name: "Label",
      defaultValue: "Button",
      control: { type: "text" },
    },
    OnClick: { action: "Clicked" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <ButtonFromCore {...args}></ButtonFromCore>
);

export const Primary: Story<ButtonProps> = Template.bind({});
Primary.args = {
  text: "Core",
  type: ButtonType.reset,
};

export const Secondary: Story<ButtonProps> = Template.bind({});
Secondary.args = {
  text: "Core Sec",
  type: ButtonType.submit,
};
