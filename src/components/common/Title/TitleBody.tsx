import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  children?: ReactNode;
  title?: ReactNode;
}

const TitleBody = ({ title, children }: Props) => {
  return (
    <Typography
      textAlign="center"
      variant="h5"
      textTransform="capitalize"
      fontWeight="600"
      marginBottom={4}
    >
      {title}
      {children}
    </Typography>
  );
};

export default TitleBody;
