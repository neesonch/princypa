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
    _event: React.MouseEvent<HTMLElement>,
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
          const displayName = dataCategory.split("identifiable.").pop(); // In the mock data provided, this seems to be common to all categories and thus is a useful split point for generating terse but usefully differentiated display labels. Would have to re-evaluate for scaled-up production data on how to achieve a similar outcome.
          return (
            <ToggleButton value={dataCategory}>{displayName}</ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </Box>
  );
};
