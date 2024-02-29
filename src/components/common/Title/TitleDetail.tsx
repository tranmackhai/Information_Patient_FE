import { ReactNode, useState } from "react";
import { Box, Collapse, List, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface Props {
  children?: ReactNode;
  title?: ReactNode;
}

const TitleDetail = ({ title, children }: Props) => {
  const [isListOpen, setListOpen] = useState(false);

  const handleToggleList = () => {
    setListOpen(!isListOpen);
  };

  return (
    <Box marginBottom={2}>
      <Box
        display="flex"
        sx={{ cursor: "pointer", userSelect: "none", width: "30%" }}
        onClick={handleToggleList}
      >
        <div
          style={{
            padding: "3px",
          }}
        >
          {isListOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
        <Box>
          <Typography variant="h5" textTransform="capitalize" fontWeight="600">
            {title}
          </Typography>
        </Box>
      </Box>
      <Collapse in={isListOpen} timeout="auto" unmountOnExit>
        <List
          component="div"
          sx={{
            paddingLeft: 2,
          }}
        >
          {children}
        </List>
      </Collapse>
    </Box>
  );
};

export default TitleDetail;
