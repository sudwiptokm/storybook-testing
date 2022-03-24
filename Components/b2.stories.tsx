import { B2, b2SizeEnum, b2TypeEnum } from "./b2";

import type { b2Props } from "./b2";
import type { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Brand/b2",
  component: B2,
  argTypes: {
    size: {
      options: [b2SizeEnum.S, b2SizeEnum.M, b2SizeEnum.L],
      control: { type: "radio" },
    },
    type: {
      options: [b2TypeEnum.BUTTON, b2TypeEnum.RESET, b2TypeEnum.SUBMIT],
      control: { type: "radio" },
    },
    label: {
      name: "Label",
      defaultValue: "Button",
      control: { type: "text" },
    },
  },
} as Meta;

const Template: Story<b2Props> = (args) => <B2 {...args}></B2>;

export const Primary: Story<b2Props> = Template.bind({});

Primary.args = {
  isAlternative: false,
  label: "Click",
  size: b2SizeEnum.S,
};

export const Variant: Story<b2Props> = Template.bind({});

Variant.args = {
  isAlternative: true,
  size: b2SizeEnum.M,
};
export const Submit: Story<b2Props> = Template.bind({});

Submit.args = {
  type: b2TypeEnum.SUBMIT,
  size: b2SizeEnum.L,
};
