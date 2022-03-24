// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export enum ButtonType {
  button = "button",
  submit = "submit",
  reset = "reset",
}
export type ButtonProps = {
  type?: ButtonType;
  icon?: JSX.Element;
  text: string;
  OnClick: () => void;
};

export type RadioProps = {
  id: string;
  title: string;
};

export type RadioGroupsProps = {
  GroupTitle: string;
  Description: string;
  Name: string;
  LegendText: string;
  defaultvalue: string;
  items: RadioProps[];
  required?: boolean;
};

export type CheckboxesProp = {
  name: string;
  id: string;
  label: string;
  description: string;
  required?: boolean;
};

export type Tabs = {
  name: string;
  href: string;
  current: boolean;
};

export type TabsProps = {
  items: Tabs[];
  onChange: (index: number) => void;
};

export enum StepStatusType {
  complete = "complete",
  current = "current",
  upcoming = "upcoming",
}

export type Steps = {
  name: string;
  description: string;
  href: string;
  status: StepStatusType;
};

export type StepperProps = {
  items: Steps[];
  onChange: (index: number) => void;
};

export type BreadCrums = {
  name: string;
  href: string;
  current: boolean;
};

export type BreadCrumsProps = {
  items: BreadCrums[];
};

export type ModalProps = {
  Modalstatus: boolean;
  ModalText?: string;
  CloseModal: () => void;
  icon?: JSX.Element;
  ModalHeader?: string;
  buttonText?: string;
  children?: JSX.Element;
};

export type TableRowNames = {
  value: string;
};

export type TableProps = {
  TableRows: any[];
  TableData: any[];
};

import { type } from "os";

export type User = {
  id: number;
  name: string;
};

export type InputProp = {
  label?: string;
  icon?: JSX.Element;
  type?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  options?: string[];
  defaultValue?: string;
  required?: boolean;
};
