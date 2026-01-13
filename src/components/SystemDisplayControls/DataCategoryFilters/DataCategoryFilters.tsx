import {
  Box,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
} from "@mui/material";
import { useDashboardStore } from "../../../store/store";
import { getUniqueDataCategories } from "../../../utils";

export const DataCategoryFilters = () => {
  const { activeDataCategories, setActiveDataCategories, systems } =
    useDashboardStore();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newDataCategories: string[]
  ) => {
    setActiveDataCategories(newDataCategories);
  };

  const dataCategories = getUniqueDataCategories(systems);

  return (
    <Box>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Filter systems by data category:
      </Typography>
      <ToggleButtonGroup
        orientation="vertical"
        value={Array.from(activeDataCategories)}
        onChange={handleChange}
        sx={{ width: "95%" }}
      >
        {dataCategories.map((dataCategory) => {
          const displayName = dataCategory.split("identifiable.").pop();
          return (
            <ToggleButton value={dataCategory}>{displayName}</ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </Box>
  );
};
