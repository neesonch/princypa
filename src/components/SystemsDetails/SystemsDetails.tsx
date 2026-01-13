import { useDashboardStore } from "../../store/store";
import { groupSystemsByDataUse, groupSystemsByType } from "../../utils";
import { SystemGroup } from "../SystemGroup/SystemGroup";
import { Box } from "@mui/material";

export const SystemsDetails = () => {
  const { systems, viewMode, activeDataUses, activeDataCategories } =
    useDashboardStore((state) => state);

  const filteredSystems = systems.filter((system) =>
    system.privacy_declarations.some((privacy_declaration) => {
      const matchesDataUse = activeDataUses.has(privacy_declaration.data_use);
      const matchesDataCategory = privacy_declaration.data_categories.some(
        (category) => activeDataCategories.has(category)
      );

      return matchesDataUse && matchesDataCategory;
    })
  );

  const groupedSystems =
    viewMode === "system-type"
      ? groupSystemsByType(filteredSystems)
      : groupSystemsByDataUse(filteredSystems, activeDataUses);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        gap: 2,
        maxHeight: "99vh",
        overflowY: "scroll",
        paddingLeft: "30px",
      }}
    >
      {groupedSystems.map((group) => (
        <SystemGroup
          systemType={group.groupKey}
          key={group.groupKey}
          systems={group.systems}
        />
      ))}
    </Box>
  );
};
