import { Button } from "./Button";

import type { ButtonProps } from "./Button";
import type { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Brand/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Hi</Button>;

export const Primary: Story<ButtonProps> = Template.bind({});

Primary.args = {
  isVariant: false,
  text: "test 1",
};

export const Variant: Story<ButtonProps> = Template.bind({});

Variant.args = {
  isVariant: true,
  text: "test 2",
};
