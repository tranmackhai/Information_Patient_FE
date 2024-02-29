import { ReactNode, useState } from "react";
import { Box, Modal, Typography } from "@mui/material";

interface Props {
  children?: ReactNode;
  title?: string;
  daddy?: ReactNode;
}

const TitleOverview = ({ title, children, daddy }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTitleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box>
      <Box sx={{ marginLeft: "36px" }}>
        <Typography
          onClick={handleTitleClick}
          sx={{
            fontSize: "1.4rem",
            textTransform: "capitalize",
            cursor: "pointer",
            fontWeight: "600",
            margin: "12px 0",
            width: "35%",
          }}
        >
          {title}
        </Typography>
        {daddy}
      </Box>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            minWidth: "90%",
            minHeight: "60%",
            bgcolor: "background.paper",
            borderRadius: "4px",
            p: 2,
            top: "50%",
            left: "50%",
            position: "absolute",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.6rem",
              textTransform: "capitalize",
              fontWeight: "600",
              textAlign: "center",
              padding: "18px 0",
            }}
          >
            {title}
          </Typography>
          <Box>{children}</Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default TitleOverview;
