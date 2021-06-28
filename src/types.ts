export type FilterItem = {
  type: "item";
  id?: string;
  label?: string;
  columnField: string;
  value: any;
  operator:
    | "eq"
    | "notEq"
    | "contains"
    | "notContains"
    | "startsWith"
    | "endsWith";
};
export type GroupOperator = "AND" | "OR";
type FilterGroup = {
  type: "group";
  id?: string;
  label?: string;
  operator: GroupOperator;
  filterItems: FilterItem[];
};
export type FilterUnion = FilterItem | FilterGroup;
