"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useEffect, useMemo, useState } from "react";
import queryString from "query-string";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Filter } from "lucide-react";
import FilterInputSlider from "./FilterInputSlider";

interface QueryParams {
  price?: string;
  rating?: string;
  page?: number;
}

export function FilterDrawer({
  minPrice,
  maxPrice,
}: {
  minPrice: number;
  maxPrice: number;
}) {
  const minRating = 0;
  const maxRating = 5;

  const [minValue, setMinValue] = useState(minPrice);
  const [maxValue, setMaxValue] = useState(maxPrice);
  const [minRatingValue, setMinRatingValue] = useState(minRating);
  const [maxRatingValue, setMaxRatingValue] = useState(maxRating);

  const router = useRouter();
  let path = usePathname();
  const searchParams = useSearchParams();

  const params: { [key: string]: string } = useMemo(() => {
    const params: { [key: string]: string } = {};
    // Iterate over searchParams.entries()
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    return params;
  }, [searchParams]);

  useEffect(() => {
    if (searchParams.get("price")) {
      const [min, max] = searchParams.get("price")!.split("-");
      const newMin = Number(min);
      const newMax = Number(max);
      if (newMin !== minValue) setMinValue(newMin);
      if (newMax !== maxValue) setMaxValue(newMax);
    }

    if (searchParams.get("rating")) {
      const [min, max] = searchParams.get("rating")!.split("-");
      const newMin = Number(min);
      const newMax = Number(max);
      if (newMin !== minRatingValue) setMinRatingValue(newMin);
      if (newMax !== maxRatingValue) setMaxRatingValue(newMax);
    }
  }, [searchParams, minValue, maxValue, minRatingValue, maxRatingValue]);

  const createUrl = useMemo(
    () => (price?: string, rating?: string) => {
      const query: QueryParams = { ...params, page: 1 };
      if (price) query.price = price;
      if (rating) query.rating = rating;

      const stringifiableParams: queryString.StringifiableRecord =
        Object.fromEntries(
          Object.entries(params).map(([key, value]) => [key, String(value)])
        );

      return queryString.stringifyUrl({
        url: path,
        query: stringifiableParams,
      });
    },
    [path, params]
  );

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={"outline"} size={"icon"} className="h-9">
          <Filter size={18} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Filter Products</DrawerTitle>
            <DrawerDescription>
              Filter products by price (₦) and ratings.
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4">
            <div>
              <FilterInputSlider
                min={minPrice}
                max={maxPrice}
                minValue={minValue}
                maxValue={maxValue}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
              />
              <div className="pt-5">
                <p className="mb-1">Ratings</p>
                <FilterInputSlider
                  min={minRating}
                  max={maxRating}
                  minValue={minRatingValue}
                  maxValue={maxRatingValue}
                  setMinValue={setMinRatingValue}
                  setMaxValue={setMaxRatingValue}
                />
              </div>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button
                onClick={() => {
                  let price = "";
                  if (minValue !== minPrice || maxValue !== maxPrice) {
                    price = `${minValue}-${maxValue}`;
                  }
                  let rating = "";
                  if (
                    minRatingValue !== minRating ||
                    maxRatingValue !== maxRating
                  ) {
                    rating = `${minRatingValue}-${maxRatingValue}`;
                  }
                  const href = createUrl(price, rating);
                  router.push(href);
                }}
              >
                Submit
              </Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
