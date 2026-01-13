import type { System } from "../../types/types";
import { Box, Typography } from "@mui/material";
import { SystemCard } from "../SystemCard/SystemCard";

interface SystemGroupProps {
  systemType: string;
  systems: System[];
}

export const SystemGroup = (props: SystemGroupProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        overflow: "scroll",
        wordWrap: "break-word",
        gap: 1,
      }}
    >
      <Typography sx={{ textTransform: "capitalize" }} variant="h6">
        {props.systemType}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          paddingBottom: "5px",
          flexWrap: "wrap",
        }}
      >
        {props.systems.map((system) => (
          <SystemCard system={system} />
        ))}
      </Box>
    </Box>
  );
};
