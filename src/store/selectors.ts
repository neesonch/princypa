// import { useDashboardStore } from "./store";
// import { useShallow } from "zustand/shallow";
// import type { SystemType, System, GroupedSystems } from "../types/types";

// export const useSystemsGroupedByType = () => {
//   return useDashboardStore(
//     useShallow((state) => {
//       const systems = state.systems;
//       const groupedSystems = {} as Record<SystemType, System[]>;
//       systems.map((system) => {
//         const { system_type } = system;
//         if (Object.hasOwn(groupedSystems, system_type)) {
//           groupedSystems[system_type].push(system);
//         } else {
//           groupedSystems[system_type] = [system];
//         }
//       });

//       const groups: GroupedSystems[] = Object.entries(groupedSystems).map(
//         ([systemType, systems]) => ({
//           groupKey: systemType as SystemType,
//           systems,
//         })
//       );

//       return groups;
//     })
//   );
// };
