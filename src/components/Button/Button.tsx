import React from "react";
import MuiButton from "@mui/material/Button";
import type { ButtonProps as MuiButtonProps } from "@mui/material";

export interface ButtonProps extends MuiButtonProps {
  /** Your own extra props if needed */
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <MuiButton
      sx={{
        borderRadius: "6px"
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
