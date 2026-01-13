import { SystemsDetails } from "../components/SystemsDetails/SystemsDetails";
import { SystemDisplayControls } from "../components/SystemDisplayControls/SystemDisplayControls";
import { Grid, AppBar, Typography } from "@mui/material";

export const Dashboard = () => {
  return (
    <Grid container spacing={1}>
      <AppBar
        position="static"
        sx={{
          borderRadius: "5px",
          padding: "10px",
          paddingLeft: "50px",
          marginBottom: "10px",
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Systems Dashboard
        </Typography>
      </AppBar>
      <Grid size={{ xs: 12, sm: 3, xl: 3 }}>
        <SystemDisplayControls />
      </Grid>
      <Grid size={{ xs: 12, sm: 9, xl: 9 }}>
        <SystemsDetails />
      </Grid>
    </Grid>
  );
};
