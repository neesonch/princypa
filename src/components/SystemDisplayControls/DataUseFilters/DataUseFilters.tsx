import {
  Box,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
} from "@mui/material";
import { useDashboardStore } from "../../../store/store";
import { getUniqueDataUses, truncateText } from "../../../utils";

export const DataUseFilters = () => {
  const { activeDataUses, setActiveDataUses, systems } = useDashboardStore();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newDataUses: string[]
  ) => {
    setActiveDataUses(newDataUses);
  };

  const dataUses = getUniqueDataUses(systems);

  return (
    <Box>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Filter systems by data use:
      </Typography>
      <ToggleButtonGroup
        orientation="vertical"
        value={Array.from(activeDataUses)}
        onChange={handleChange}
        sx={{ width: "95%" }}
      >
        {dataUses.map((dataUse) => {
          return (
            <ToggleButton value={dataUse}>{truncateText(dataUse)}</ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </Box>
  );
};
