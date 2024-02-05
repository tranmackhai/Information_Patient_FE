import { ReactNode, CSSProperties } from "react";
import { Box, Grid } from "@mui/material";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";

interface Props {
  children?: ReactNode;
}

const BodyLayout = ({ children }: Props) => {
  return (
    <section className="layout">
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "rgb(238, 242, 246)",
            }}
          >
            <Box
              sx={{
                margin: "64px 0",
                background: "#fff",
                width: "90%",
                padding: 5,
                borderRadius: "4px",
                outline: "none",
                boxShadow: "rgba(0, 0, 0, 0.32) -3.67394e-16px 2px 8px 0px",
              }}
            >
              {children}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default BodyLayout;
