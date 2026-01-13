import "./App.css";
import { Dashboard } from "./features/Dashboard";
import { useEffect } from "react";
import { useDashboardStore } from "./store/store";
import type { System } from "./types/types";
import mockData from "./data/mock_data.json";
import { Box } from "@mui/material";
import { getUniqueDataCategories, getUniqueDataUses } from "./utils";

function App() {
  const { setSystems, setActiveDataCategories, setActiveDataUses, systems } =
    useDashboardStore((state) => state);

  useEffect(() => {
    setSystems(mockData as System[]);
  }, []);

  useEffect(() => {
    setActiveDataCategories(getUniqueDataCategories(systems));
    setActiveDataUses(getUniqueDataUses(systems));
  }, [systems]);

  return (
    <Box
      sx={{
        bgcolor: "grey.100",
        minHeight: "100vh",
        p: 2,
      }}
    >
      <Dashboard />
    </Box>
  );
}

export default App;
