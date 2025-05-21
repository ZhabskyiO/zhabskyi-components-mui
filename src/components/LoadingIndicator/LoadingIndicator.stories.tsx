import type { Meta, StoryObj } from "@storybook/react";
import LoadingIndicator from "./LoadingIndicator";

const meta = {
  title: "Components/LoadingIndicator",
  component: LoadingIndicator,
  argTypes: {
    size: {
      control: { type: "number", min: 10, max: 200, step: 5 },
      defaultValue: 40
    },
    thickness: {
      control: { type: "number", min: 1, max: 10, step: 0.1 },
      defaultValue: 3.6
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "error", "info", "success", "warning"],
      defaultValue: "primary"
    },
    variant: {
      control: "select",
      options: ["indeterminate", "determinate"],
      defaultValue: "indeterminate"
    }
  }
} satisfies Meta<typeof LoadingIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 40,
    color: "primary"
  }
};

export const Secondary: Story = {
  args: {
    size: 40,
    color: "secondary"
  }
};
