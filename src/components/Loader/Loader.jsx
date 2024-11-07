import React from "react";
import { Box, styled } from "@mui/system";
export const LoaderWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "40rem",
  minWidth: "30rem",
  "&.autoHeight": {
    minHeight: "auto",
  },
  "&.unsetAll": {
    minHeight: "auto",
    display: "unset",
  },
}));
export default function Loader({
  children,
  isLoaded = false,
  isLoading = true,
  className = "",
  status = "pending",
}) {
  if (isLoaded || !isLoading || !["pending"].includes(status)) {
    return <>{children}</>;
  }

  return (
    <LoaderWrapper className={`Loader ${className}`}>
      loading ....
    </LoaderWrapper>
  );
}
