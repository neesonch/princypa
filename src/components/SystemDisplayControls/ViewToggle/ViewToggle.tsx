import {
  Box,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
} from "@mui/material";
import { useDashboardStore } from "../../../store/store";

export const ViewToggle = () => {
  const { viewMode, setViewMode } = useDashboardStore((state) => state);

  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newMode: "system-type" | "data-use" | null
  ) => {
    if (newMode !== null) setViewMode(newMode);
  };

  return (
    <Box>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        View systems by:
      </Typography>
      <ToggleButtonGroup
        value={viewMode}
        exclusive
        onChange={handleChange}
        sx={{ width: "95%" }}
      >
        <ToggleButton sx={{ width: "50%" }} value="system-type">
          System Type
        </ToggleButton>
        <ToggleButton sx={{ width: "50%" }} value="data-use">
          Data Use
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};
