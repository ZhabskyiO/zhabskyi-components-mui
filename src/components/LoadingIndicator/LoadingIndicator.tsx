import React from "react";
import { CircularProgress, Box, type CircularProgressProps } from "@mui/material";

export interface LoadingIndicatorProps extends CircularProgressProps {
  center?: boolean;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ center = true, size = 40, thickness = 3.6, ...props }) => {
  const loader = <CircularProgress size={size} thickness={thickness} {...props} />;

  if (!center) return <>{loader}</>;

  return (
    <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
      {loader}
    </Box>
  );
};

export default LoadingIndicator;
