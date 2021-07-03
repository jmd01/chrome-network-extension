import { Box, Chip } from "@material-ui/core";
import React from "react";
import { FilterUnion } from "./types";

const quickFilters: FilterUnion[] = [
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
];

type FilterProps = {
  filters: FilterUnion[];
  setFilters: (value: FilterUnion[]) => void;
};
export const Filter = ({ filters, setFilters }: FilterProps) => {
  return (
    <Box display="flex" alignContent={"center"} style={{ gap: 4 }}>
      {quickFilters.map((filter, index) => {
        const isSelected = filters.some(({ id }) => id === filter.id);
        return (
          <Chip
            key={index}
            variant="outlined"
            size="small"
            label={filter?.label}
            color={isSelected ? "primary" : undefined}
            clickable
            onClick={() => {
              setFilters(
                isSelected
                  ? filters.filter(({ id }) => id !== filter.id)
                  : [...filters, filter]
              );
            }}
          />
        );
      })}
    </Box>
  );
};
