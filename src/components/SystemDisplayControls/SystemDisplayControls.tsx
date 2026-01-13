import { Paper } from "@mui/material";
import { ViewToggle } from "./ViewToggle/ViewToggle";
import { DataUseFilters } from "./DataUseFilters/DataUseFilters";
import { DataCategoryFilters } from "./DataCategoryFilters/DataCategoryFilters";

export const SystemDisplayControls = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        gap: 3,
        height: "95vh",
        maxHeight: "95vh",
        overflow: "scroll",
        paddingTop: "10px",
        paddingLeft: "10px",
      }}
    >
      <ViewToggle />
      <DataUseFilters />
      <DataCategoryFilters />
    </Paper>
  );
};
