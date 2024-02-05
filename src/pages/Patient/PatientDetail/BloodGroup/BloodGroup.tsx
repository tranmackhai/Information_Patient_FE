import React from "react";
import TitleDetail from "../../../../components/common/Title/TitleDetail";
import { Grid, ListItem, TextField } from "@mui/material";

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
        </Grid>
      </Grid>
    </TitleDetail>
  );
};

export default BloodGroup;
