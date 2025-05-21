import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: { control: "select", options: ["contained", "outlined", "text"] },
    color: { control: "select", options: ["primary", "secondary", "error", "info", "success", "warning"] },
    size: { control: "select", options: ["small", "medium", "large"] },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "contained",
    color: "primary",
    children: "Primary Button"
  }
};

export const Secondary: Story = {
  args: {
    variant: "contained",
    color: "secondary",
    children: "Secondary Button"
  }
};

export const Info: Story = {
  args: {
    variant: "contained",
    color: "info",
    children: "Info Button"
  }
};

export const Error: Story = {
  args: {
    variant: "contained",
    color: "error",
    children: "Error Button"
  }
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    color: "primary",
    children: "Outlined Button"
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button"
  }
};
