import { GridRowData } from "@material-ui/data-grid";
import { FilterItem, FilterUnion, GroupOperator } from "../types";
import { match } from "ts-pattern";
import { NetworkRequest } from "../../App";

const getPostDataValues = (
  request: NetworkRequest,
  postDataKeys: Set<string>
): Record<string, any> => {
  return [...postDataKeys].reduce((acc, key) => {
    if (request.request.postData?.text) {
      const parsedPostData = JSON.parse(request.request.postData.text);
      if (key in parsedPostData) {
        acc = {
          ...acc,
          [key]: parsedPostData[key],
        };
      }
    }
    return acc;
  }, {});
};
export const getFilteredRows = (
  rows: GridRowData[],
  filters: FilterUnion[],
  groupOperator: GroupOperator
) => {
  return rows.filter((row) => evaluateFilters(row, filters, groupOperator));
};
const evaluateFilters = (
  row: GridRowData,
  filters: FilterUnion[],
  groupOperator: GroupOperator
): boolean => {
  return filters.some((filter) =>
    match(filter)
      .with({ type: "item" }, (filterItem) => {
        return groupOperator === "AND"
          ? !evaluateFilter(row, filterItem)
          : evaluateFilter(row, filterItem);
      })
      .with({ type: "group" }, ({ filterItems, operator }) =>
        evaluateFilters(row, filterItems, operator)
      )
      .exhaustive()
  );
};
const evaluateFilter = (row: GridRowData, filterItem: FilterItem): boolean => {
  if (filterItem.columnField in row) {
    return match(filterItem.operator)
      .with("eq", () => {
        return row[filterItem.columnField] === filterItem.value;
      })
      .with("notEq", () => {
        return row[filterItem.columnField] !== filterItem.value;
      })
      .otherwise(() => false);
  }
  return false;
};
export const mapRequestToGridRow = (
  request: NetworkRequest,
  index: number,
  postDataKeys: Set<string>
): GridRowData => ({
  id: index,
  name: /[^/]*$/.exec(request.request.url)?.[0] ?? request.request.url,
  postData: request.request.postData?.text
    ? request.request.postData?.text.replace(/\\n/g, "")
    : "",
  status: request.response.status,
  type: (request as any)._resourceType,
  size: request.response._transferSize,
  ...getPostDataValues(request, postDataKeys),
  response: request.responseContent.content
    ? request.responseContent.content.replace(/\\n/g, "")
    : "",
});
