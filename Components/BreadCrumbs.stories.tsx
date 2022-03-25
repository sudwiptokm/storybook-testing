import BreadCrumbs from "./BreadCrumbs";
import { BreadCrumsProps } from "../interfaces";

import type { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Brand/BreadCrumbs",
  component: BreadCrumbs,
} as Meta;

const Template: Story<BreadCrumsProps> = (args) => (
  <BreadCrumbs {...args}></BreadCrumbs>
);

export const Primary: Story<BreadCrumsProps> = Template.bind({});
Primary.args = {
  items: [
    { name: "Projects", href: "projects", current: false },
    { name: "Project Nero", href: "#", current: true },
  ],
};

export const Secondary: Story<BreadCrumsProps> = Template.bind({});
Secondary.args = {
  items: [
    { name: "Projects", href: "projects", current: false },
    { name: "Project Nero", href: "#", current: true },
    { name: "Project Omen", href: "#", current: false },
    { name: "Project Virj", href: "#", current: false },
  ],
};
