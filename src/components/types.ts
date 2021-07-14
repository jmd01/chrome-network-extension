export type FilterItem = {
  type: "item";
  id?: string;
  label?: string;
  columnField: string;
  value: any;
  operator?:
    | "eq"
    | "notEq"
    | "contains"
    | "notContains"
    | "gt"
    | "gtEq"
    | "lt"
    | "ltEq"
    | "startsWith"
    | "endsWith";
};
export type GroupOperator = "AND" | "OR";
export type FilterGroup = {
  type: "group";
  id?: string;
  label?: string;
  operator: GroupOperator;
  filterItems: FilterUnion[];
};
export type FilterUnion = FilterItem | FilterGroup;

export const isFilterGroup = (filter: FilterUnion): filter is FilterGroup =>
  filter.type === "group";

export interface GridColumnVisibilityChangeParams {
  field: string;
  isVisible: boolean;
}

export function notEmpty<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}
