import React, { useState } from "react";
import TitleBody from "../../../../components/common/Title/TitleBody";
import { Box, Modal, Backdrop, Fade } from "@mui/material";

const NutritionalOverview = () => {
  const imageUrl =
    "https://res.cloudinary.com/dhypn6jgk/image/upload/v1706598176/Children%27s%20Hopital%202/Image/https_3A_2F_2Fprod-files-secure.s3.us-west-2.amazonaws.com_2Ff8730707-e54c-429a-8e2d-82a9f7af47a0_2F30cf1bde-23ef-4873-90ee-bfe72d728417_2FScreenshot_2023-10-01_at_13.57.18_q4slyc.png";

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <TitleBody title="Bảng chỉ số dinh dưỡng theo tuổi: suy dinh dưỡng mãn tiến triển ">
      <Box
        sx={{
          img: {
            maxWidth: "45%",
            cursor: "pointer",
          },
        }}
      >
        <img src={imageUrl} alt="Bảng dinh dưỡng" onClick={handleOpen} />

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                outline: 0,
                maxWidth: "50%",
              }}
            >
              <img
                src={imageUrl}
                alt="Bảng dinh dưỡng"
                style={{ maxWidth: "100%", maxHeight: "800px" }}
              />
            </Box>
          </Fade>
        </Modal>
      </Box>
    </TitleBody>
  );
};

export default NutritionalOverview;
