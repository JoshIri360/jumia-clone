"use client";
import { useSearchParams } from "next/navigation";

const GetQuery = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  console.log(page);
  return <div></div>;
};

export default GetQuery;
