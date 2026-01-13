export type PrivacyDeclaration = {
  name: string;
  data_use: string;
  data_categories: string[];
  data_subjects: string[];
};

export type SystemType = "Application" | "Service" | "Database" | "Integration";

export type System = {
  fides_key: string;
  name: string;
  description: string;
  system_type: SystemType;

  privacy_declarations: PrivacyDeclaration[];

  system_dependencies: string[]; // references to other fides_keys
};

export type GroupedSystems = {
  groupKey: SystemType | string; // TODO: construct union type from possible values for data uses and use it in place of string
  systems: System[];
};

export type ViewMode = "system-type" | "data-use";
