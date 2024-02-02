"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

type PaginationComponentProps = {
  id: string;
  currentPage: number;
  totalPages: number;
};

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  id,
  currentPage,
  totalPages,
}) => {
  const router = useRouter();
  let path = usePathname();
  const searchParams = useSearchParams();

  const params: { [key: string]: string } = {};

  // Iterate over searchParams.entries()
  for (const [key, value] of searchParams.entries()) {
    // Append each key-value pair to the path
    if (key !== "page") {
      params[key] = value;
    }
  }

  const createUrl = (page: number) => {
    return queryString.stringifyUrl({ url: path, query: { ...params, page } });
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={currentPage > 1 ? createUrl(currentPage - 1) : "#"}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={createUrl(1)} isActive={currentPage === 1}>
            1
          </PaginationLink>
        </PaginationItem>
        {currentPage > 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {currentPage > 2 && (
          <PaginationItem>
            <PaginationLink href={createUrl(currentPage - 1)}>
              {currentPage - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {currentPage > 1 && currentPage < totalPages && (
          <PaginationItem>
            <PaginationLink
              href={createUrl(currentPage)}
              isActive={currentPage !== 1 && currentPage !== totalPages}
            >
              {currentPage}
            </PaginationLink>
          </PaginationItem>
        )}
        {currentPage < totalPages - 1 && (
          <PaginationItem>
            <PaginationLink href={createUrl(currentPage + 1)}>
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {currentPage < totalPages - 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink
            href={createUrl(totalPages)}
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={currentPage < totalPages ? createUrl(currentPage + 1) : "#"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
