"use client";
import React, { useCallback, useEffect, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";

const Selectsort = () => {
  const router = useRouter();
  const pathName = usePathname();
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

  useEffect(() => {
    console.log(pathName);
  }, [selected]);

  return (
    <Select onValueChange={setSelected} defaultValue="Popularity">
      <SelectTrigger className="w-[180px] h-9 border-0 hover:bg-secondary">
        <SelectValue placeholder={sortBy[0]} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort by</SelectLabel>
          {sortBy.map((item) => (
            <SelectItem value={item} key={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Selectsort;
