"use client";
import React, { useCallback, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Selectsort = () => {
  const sortBy = useMemo(
    () => [
      "Popularity",
      "Price: Low to High",
      "Price: High to Low",
      "Product Rating",
    ],
    []
  );

  const [selected, setSelected] = React.useState(sortBy[0]);

  const handleItemClick = useCallback((item: string) => {
    console.log(item);
    setSelected(item);
  }, []);

  return (
    <Select>
      <SelectTrigger className="w-[180px] h-9 border-0 hover:bg-secondary">
        <SelectValue placeholder={sortBy[0]} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort by</SelectLabel>
          {sortBy.map((item) => (
            <SelectItem
              value={item}
              key={item}
              onClick={() => handleItemClick(item)}
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
