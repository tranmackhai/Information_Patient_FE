import React from "react";
import TitleDetail from "../../../../components/common/Title/TitleDetail";
import { Grid, ListItem } from "@mui/material";

const PrenatalCare = () => {
  return (
    <TitleDetail title="Tiền căn sản khoa">
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <ListItem></ListItem>
        </Grid>
        <Grid item xs={3}>
          <ListItem style={{ padding: "10px" }}></ListItem>
        </Grid>
      </Grid>
    </TitleDetail>
  );
};

export default PrenatalCare;
