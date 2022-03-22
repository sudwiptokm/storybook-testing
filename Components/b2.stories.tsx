import B2 from "./b2";

import type { b2Props } from "./b2";
import type { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Brand/b2",
  component: B2,
} as Meta;

const Template: Story<b2Props> = (args) => <B2 {...args}></B2>;

export const Primary: Story<b2Props> = Template.bind({});

Primary.args = {
  isDisabled: false,
  label: "Click mwww",
};

export const Variant: Story<b2Props> = Template.bind({});

Variant.args = {
  isDisabled: true,
};
export const Submit: Story<b2Props> = Template.bind({});

Variant.args = {
  type: "submit",
  size: "small",
};
