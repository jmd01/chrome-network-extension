import { Box, Chip } from "@material-ui/core";
import React from "react";
import { FilterGroup, FilterUnion, isFilterGroup } from "../types";

export const quickFilters: FilterUnion[] = [
  {
    type: "group",
    id: "xhr",
    label: "XHR",
    operator: "OR",
    filterItems: [
      {
        type: "item",
        columnField: "type",
        value: "xhr",
        operator: "eq",
      },
      {
        type: "item",
        columnField: "type",
        value: "fetch",
        operator: "eq",
      },
      {
        type: "item",
        columnField: "type",
        value: "eventsource",
        operator: "eq",
      },
    ],
  },
  {
    type: "item",
    id: "script",
    label: "JS",
    columnField: "type",
    value: "script",
    operator: "eq",
  },
  {
    type: "item",
    id: "css",
    label: "CSS",
    columnField: "type",
    value: "css",
    operator: "eq",
  },
  {
    type: "item",
    id: "img",
    label: "Img",
    columnField: "type",
    value: "image",
    operator: "eq",
  },
  {
    type: "item",
    id: "media",
    label: "Media",
    columnField: "type",
    value: "media",
    operator: "eq",
  },
  {
    type: "item",
    id: "font",
    label: "Font",
    columnField: "type",
    value: "font",
    operator: "eq",
  },
  {
    type: "item",
    id: "document",
    label: "Doc",
    columnField: "type",
    value: "document",
    operator: "eq",
  },
  {
    type: "item",
    id: "websocket",
    label: "WS",
    columnField: "type",
    value: "websocket",
    operator: "eq",
  },
  {
    type: "item",
    id: "manifest",
    label: "Manifest",
    columnField: "type",
    value: "manifest",
    operator: "eq",
  },
];

type FilterProps = {
  filters: FilterUnion[];
  setFilters: (value: FilterUnion[]) => void;
};

export const Filter = ({ filters, setFilters }: FilterProps) => {
  const quickFilterGroup: FilterGroup = filters
    .filter(isFilterGroup)
    .find(({ id }) => id === "quick") ?? {
    type: "group",
    id: "quick",
    operator: "OR",
    filterItems: [],
  };
  // const quickFilterGroupItems =
  //   quickFilterGroup && quickFilterGroup.type === "group"
  //     ? quickFilterGroup.filterItems
  //     : [];

  return (
    <Box display="flex" alignContent={"center"} style={{ gap: 4 }}>
      {quickFilters.map((filter, index) => {
        const isSelected = quickFilterGroup.filterItems.some(
          ({ id }) => id === filter.id
        );

        return (
          <Chip
            key={index}
            variant="outlined"
            size="small"
            label={filter?.label}
            color={isSelected ? "primary" : undefined}
            clickable
            onClick={() => {
              const otherFilterGroups = filters.filter(
                ({ id }) => id !== "quick"
              );

              const updatedQuickFilterGroup: FilterGroup = {
                ...quickFilterGroup,
                filterItems: isSelected
                  ? quickFilterGroup.filterItems.filter(
                      ({ id }) => id !== filter.id
                    )
                  : [...quickFilterGroup.filterItems, filter],
              };

              setFilters([...otherFilterGroups, updatedQuickFilterGroup]);
            }}
          />
        );
      })}
    </Box>
  );
};
