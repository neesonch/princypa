import { create } from "zustand";
import type { System, ViewMode } from "../types/types";

export interface DashboardState {
  systems: System[];
  setSystems: (systems: System[]) => void;
  viewMode: ViewMode;
  setViewMode: (viewMode: ViewMode) => void;
  activeDataUses: Set<string>;
  setActiveDataUses: (uses: string[]) => void;
  activeDataCategories: Set<string>;
  setActiveDataCategories: (uses: string[]) => void;
}

export const useDashboardStore = create<DashboardState>()((set) => ({
  systems: [],
  setSystems: (systems: System[]) => {
    set(() => ({ systems: [...systems] }));
  },
  viewMode: "system-type",
  setViewMode: (viewMode: ViewMode) => {
    set(() => ({ viewMode }));
  },
  activeDataUses: new Set([]),
  setActiveDataUses: (uses: string[]) => {
    set(() => ({ activeDataUses: new Set(uses) }));
  },
  activeDataCategories: new Set([]),
  setActiveDataCategories: (categories: string[]) => {
    set(() => ({ activeDataCategories: new Set(categories) }));
  },
}));
