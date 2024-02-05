import React from "react";
import TitleDetail from "../../../../components/common/Title/TitleDetail";
import { Grid, ListItem } from "@mui/material";

const VaccinationRecord = () => {
  return (
    <TitleDetail title="Sổ tiêm ngừa">
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

export default VaccinationRecord;
