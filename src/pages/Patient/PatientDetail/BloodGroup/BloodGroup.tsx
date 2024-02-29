import React from "react";
import TitleDetail from "../../../../components/common/Title/TitleDetail";
import { Button, Grid, ListItem, TextField } from "@mui/material";

const BloodGroup = () => {
  return (
    <TitleDetail title="Nhóm máu mẹ / con">
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <ListItem
            sx={{
              i: {
                paddingRight: "6px",
                color: "#6d6e6a",
              },
              span: {
                fontWeight: "450",
              },
            }}
          >
            <i className="fa-solid fa-person"></i>
            <span>Nhóm máu mẹ</span>
          </ListItem>
          <ListItem
            sx={{
              i: {
                paddingRight: "2px",
                color: "#6d6e6a",
              },
              span: {
                fontWeight: "450",
              },
            }}
          >
            <i className="fa-solid fa-baby"></i>
            <span>Nhóm máu con</span>
          </ListItem>
        </Grid>
        <Grid item xs={3}>
          <ListItem>
            <TextField
              type="text"
              placeholder="Nhóm máu mẹ"
              color="success"
              size="small"
              value={"Nhóm AB-"}
              InputProps={{
                style: {
                  height: "28px",
                  fontSize: "1rem",
                },
              }}
              sx={{
                margin: "6px 0",
                "& input::placeholder": {
                  fontSize: "16px",
                },
              }}
            />
          </ListItem>
          <ListItem>
            <TextField
              type="text"
              placeholder="Nhóm máu con"
              color="success"
              size="small"
              value={"Nhóm O+"}
              InputProps={{
                style: {
                  height: "28px",
                  fontSize: "1rem",
                },
              }}
              sx={{
                margin: "6px 0",
                "& input::placeholder": {
                  fontSize: "16px",
                },
              }}
            />
          </ListItem>
          <ListItem>
            <Button
              type="submit"
              sx={{
                width: "60px",
                maxHeight: "30px",
                padding: "10px 0",
                borderRadius: "4px",
                outline: "none",
                cursor: "pointer",
                backgroundColor: "rgb(64, 224, 58, 0.83)",
                color: "#fff",
                fontWeight: "600",
                border: "none",
                textTransform: "uppercase",
                marginRight: "12px",
                "&:hover": {
                  backgroundColor: "rgb(64, 224, 58)",
                },
              }}
            >
              Lưu
            </Button>
            <Button
              type="submit"
              sx={{
                width: "60px",
                height: "30px",
                padding: "10px 0",
                borderRadius: "4px",
                outline: "none",
                cursor: "pointer",
                backgroundColor: "rgb(174 167 167)",
                color: "#fff",
                fontWeight: "600",
                border: "none",
                textTransform: "uppercase",
                "&:hover": {
                  backgroundColor: "rgb(174 167 167)",
                },
              }}
            >
              Huỷ
            </Button>
          </ListItem>
        </Grid>
      </Grid>
    </TitleDetail>
  );
};

export default BloodGroup;
