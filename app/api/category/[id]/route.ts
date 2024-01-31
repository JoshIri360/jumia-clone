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

  let filterPriceMin: number = 0;
  let filterPriceMax: number = 0;
  const filterPrice = req.nextUrl.searchParams.get("filterPrice");
  if (filterPrice) {
    filterPriceMin = parseInt(filterPrice.split("-")[0]);
    filterPriceMin /= 11;
    filterPriceMax = parseInt(filterPrice.split("-")[1]);
    filterPriceMax /= 11;
  }

  // Get the sort parameter from the request
  const sort: string = req.nextUrl.searchParams.get("sort") || DEFAULT_SORT;

  // Define the sorting dictionary
  let sortDictionary: SortDictionary | SortedDictionary = {
    popularity: {
      no_of_ratings: -1,
    },
    "price-low-to-high": {
      price: 1,
    },
    "price-high-to-low": {
      price: -1,
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
    let products = await Product.find({ category: params.id })
      .sort(sortDictionary)
      .limit(limit)
      .skip(page);

    // Convert the prices of the products by multiplying them by 11
    products = products.map((product) => {
      if (product.discount_price) {
        product.discount_price *= 11;
      }
      product.actual_price *= 11;
      return product;
    });

    // Find the minimum and maximum prices
    const priceRange = await Product.aggregate([
      { $match: { category: params.id } },
      {
        $group: {
          _id: null,
          minPrice: { $min: { $ifNull: ["$discount_price", "$actual_price"] } },
          maxPrice: { $max: { $ifNull: ["$discount_price", "$actual_price"] } },
        },
      },
    ]);

    const minPrice = priceRange[0]?.minPrice * 11;
    const maxPrice = priceRange[0]?.maxPrice * 11;

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
