import React from "react";
import TitleDetail from "../../../../components/common/Title/TitleDetail";
import { Grid, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

const NutritionalAssessment = () => {
  return (
    <TitleDetail title="Đánh giá dinh dưỡng">
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <ListItem
            sx={{
              i: {
                paddingRight: "6px",
                color: "#6d6e6a",
              },
              a: {
                color: "rgba(0, 0, 0, 0.87)",
                paddingLeft: "6px",
                fontWeight: "450",
              },
            }}
          >
            <Link to="/patient/nutritional-assessment">
              <i className="fa-solid fa-link"></i>
              Bảng chỉ số dinh dưỡng theo tuổi: suy dinh dưỡng mãn tiến triển
            </Link>
          </ListItem>
        </Grid>
      </Grid>
    </TitleDetail>
  );
};

export default NutritionalAssessment;
