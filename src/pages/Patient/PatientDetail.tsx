import React from "react";
import CreatePatient from "./CreatePatient";
import { Box } from "@mui/material";

const PatientDetail = () => {
  return (
    <section className="patient-detail">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Box
          sx={{
            margin: "64px 0",
            background: "#fff",
            textAlign: "center",
            width: "100%",
            maxWidth: "800px",
            padding: 10,
            borderRadius: "4px",
            outline: "none",
            boxShadow: "rgba(0, 0, 0, 0.32) -3.67394e-16px 2px 8px 0px",
          }}
        >
          {<CreatePatient />}
        </Box>
      </Box>
    </section>
  );
};

export default PatientDetail;
