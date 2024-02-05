import React from "react";
import TitleDetail from "../../../../components/common/Title/TitleDetail";
import { Grid, ListItem } from "@mui/material";

const MedicalRecord = () => {
  return (
    <TitleDetail title="Lịch sử khám">
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

export default MedicalRecord;
