import { connectToDB } from "@/utils/database";
import Product from "@/models/products";

interface Params {
  id: string;
}

interface Request extends RequestInit {
  nextUrl: URL;
}

export const GET = async (req: Request, { params }: { params: Params }) => {
  const page = req.nextUrl.searchParams.get("page");
  const sort = req.nextUrl.searchParams.get("sort");
  const limit: number = req.nextUrl.searchParams.get("limit")
    ? req.nextUrl.searchParams.get("limit") * 1
    : 10;

  let sortDictionary: any = {
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
    rating: {
      rating: -1,
    },
  };

  if (sort) {
    sortDictionary = sortDictionary[sort];
  }

  try {
    await connectToDB();

    const products = await Product.find({ category: params.id })
      .sort(sortDictionary)
      .limit(limit ? parseInt(limit) : 10)
      .skip(page ? parseInt(page) * 20 : 0);
    const count = await Product.countDocuments({ category: params.id });
    console.log(count);
    const totalPages = Math.ceil(count / limit);

    return new Response(
      JSON.stringify({
        products,
        count,
        totalPages,
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ msg: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
