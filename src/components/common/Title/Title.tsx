import { Box, Button, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  title?: ReactNode;
  children?: ReactNode;
  path?: ReactNode;
  button?: ReactNode;
}

const Title = ({ title, children, path, button }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(238, 242, 246)",
        borderRadius: "6px",
        padding: "24px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "6px",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid rgb(54, 65, 82)",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Typography
          variant="h5"
          padding="12px"
          textTransform="capitalize"
          fontWeight="600"
        >
          {title}
        </Typography>
        <Box>
          {button && (
            <Button
              onClick={() => {}}
              component={Link}
              to={`${path}/create`}
              sx={{
                marginTop: 1,
                fontWeight: "600",
                color: "rgb(64, 224, 58)",
                backgroundColor: "rgb(238,242,246)",
                height: "3rem",
                marginRight: "12px",
                "&:hover": {
                  backgroundColor: "rgb(238,242,246)",
                },
              }}
            >
              {button}
            </Button>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#fff",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Title;
