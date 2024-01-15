import { ReactNode } from "react";
import { Grid } from "@mui/material";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";

interface Props {
  children?: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <section className="layout">
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          {children}
        </Grid>
      </Grid>
    </section>
  );
};

export default DefaultLayout;
