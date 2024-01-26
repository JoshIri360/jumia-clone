"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from "lucide-react";
import { Button } from "./ui/button";

const sortBy = [
  "Popularity",
  "Newest Arrivals",
  "Price: Low to High",
  "Price: High to Low",
  "Product Rating",
];

const Selectsort = () => {
  const [selected, setSelected] = React.useState(sortBy[0]);
  return (
    <Select>
      <SelectTrigger className="w-[180px] h-9 border-0 hover:bg-secondary">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort by</SelectLabel>
          {sortBy.map((item) => (
            <SelectItem
              value={item}
              key={item}
              onClick={() => setSelected(item)}
            >
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Selectsort;
