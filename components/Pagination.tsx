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

  let hasParams = false;

  // Iterate over searchParams.entries()
  for (const [key, value] of searchParams.entries()) {
    // Append each key-value pair to the path
    if (key !== "page") {
      path += `${hasParams ? "&" : "?"}${key}=${value}`;
      hasParams = true;
    }
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={
              currentPage > 1
                ? `${path}${hasParams ? "&" : "?"}page=${currentPage - 1}`
                : "#"
            }
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={`${path}${hasParams ? "&" : "?"}page=1`}
            isActive={currentPage === 1}
          >
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
            <PaginationLink
              href={`${path}${hasParams ? "&" : "?"}page=${currentPage - 1}`}
            >
              {currentPage - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {currentPage > 1 && currentPage < totalPages && (
          <PaginationItem>
            <PaginationLink
              href={`${path}${hasParams ? "&" : "?"}page=${currentPage}`}
              isActive={currentPage !== 1 && currentPage !== totalPages}
            >
              {currentPage}
            </PaginationLink>
          </PaginationItem>
        )}
        {currentPage < totalPages - 1 && (
          <PaginationItem>
            <PaginationLink
              href={`${path}${hasParams ? "&" : "?"}page=${currentPage + 1}`}
            >
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
            href={`${path}${hasParams ? "&" : "?"}page=${totalPages}`}
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={
              currentPage < totalPages
                ? `${path}${hasParams ? "&" : "?"}page=${currentPage + 1}`
                : "#"
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
