import type { System, GroupedSystems, SystemType } from "./types/types";

export function groupSystemsByType(systems: System[]): GroupedSystems[] {
  const grouped: Record<SystemType, System[]> = {} as Record<
    SystemType,
    System[]
  >;

  for (const system of systems) {
    const type = system.system_type;
    (grouped[type] ??= []).push(system);
  }

  return Object.entries(grouped).map(([type, systems]) => ({
    groupKey: type as SystemType,
    systems,
  }));
}

export const groupSystemsByDataUse = (systems: System[]): GroupedSystems[] => {
  const map = new Map<string, System[]>();

  systems.forEach((system) => {
    system.privacy_declarations.forEach((declaration) => {
      const { data_use } = declaration;
      if (!map.has(data_use)) map.set(data_use, []);
      map.get(data_use)!.push(system);
    });
  });

  return Array.from(map.entries()).map(([dataUse, systems]) => ({
    groupKey: dataUse,
    systems,
  }));
};

export const getUniqueDataUses = (systems: System[]): string[] => {
  const dataUses = new Set<string>();

  systems.forEach((system) => {
    system.privacy_declarations.forEach((declaration) => {
      dataUses.add(declaration.data_use);
    });
  });

  return Array.from(dataUses);
};

export const getUniqueDataCategories = (systems: System[]): string[] => {
  const categories = new Set<string>();

  systems.forEach((system) => {
    system.privacy_declarations.forEach((declaration) => {
      declaration.data_categories.forEach((category) => {
        categories.add(category);
      });
    });
  });

  return Array.from(categories);
};

export const truncateText = (text: string) =>
  text.length <= 25 ? text : text.slice(0, 22) + "...";
