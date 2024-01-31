import { connectToDB } from "@/utils/database";
import Product from "@/models/products";

// Define the structure for Params
interface Params {
  id: string;
}

// Define the structure for Request
interface Request extends RequestInit {
  nextUrl: URL;
}

// Define the SortDictionary type
type SortDictionary = {
  [key: string]: {
    [key: string]: number;
  };
};

// Define the SortedDictionary type
type SortedDictionary = {
  [key: string]: 1 | -1;
};

// Define constants
const DEFAULT_LIMIT = 10;
const DEFAULT_PAGE = 0;
const DEFAULT_SORT = "popularity";

// Define the GET method
export const GET = async (req: Request, { params }: { params: Params }) => {
  // Get the limit from the request parameters or set it to 10
  const limit: number =
    parseInt(req.nextUrl.searchParams.get("limit") as string) || DEFAULT_LIMIT;

  // Get the page from the request parameters or set it to 0
  const page: number =
    (parseInt(req.nextUrl.searchParams.get("page") as string) || DEFAULT_PAGE) *
    20;

  // Get the sort parameter from the request
  const sort: string = req.nextUrl.searchParams.get("sort") || DEFAULT_SORT;

  // Define the sorting dictionary
  let sortDictionary: SortDictionary | SortedDictionary = {
    popularity: {
      no_of_ratings: -1,
    },
    "price-low-to-high": {
      discount_price: 1,
      actual_price: 1,
    },
    "price-high-to-low": {
      discount_price: -1,
      actual_price: -1,
    },
    "product-rating": {
      ratings: -1,
    },
  };

  // Sort the results
  sortDictionary = sortDictionary[sort] as SortedDictionary;

  try {
    // Connect to the database
    await connectToDB();

    // Find the products that match the category and sort, limit, and skip them according to the parameters
    const products = await Product.find({ category: params.id })
      .sort(sortDictionary)
      .limit(limit)
      .skip(page);

    // Find the minimum and maximum prices
    const priceRange = await Product.aggregate([
      { $match: { category: params.id } },
      { $sort: sortDictionary },
      { $limit: limit },
      {
        $group: {
          _id: null,
          minPrice: { $min: "$discount_price" },
          maxPrice: { $max: "$discount_price" },
        },
      },
    ]);

    const minPrice = priceRange[0]?.minPrice;
    const maxPrice = priceRange[0]?.maxPrice;

    // Count the total number of products that match the category
    const count = await Product.countDocuments({ category: params.id });

    // Calculate the total number of pages
    const totalPages = Math.ceil(count / limit);

    // Return the products, count, and totalPages in the response
    return new Response(
      JSON.stringify({
        products,
        count,
        totalPages,
        minPrice,
        maxPrice,
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error: any) {
    // If there's an error, return it in the response
    return new Response(JSON.stringify({ msg: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
