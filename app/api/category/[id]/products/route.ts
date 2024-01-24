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
  let limit = req.nextUrl.searchParams.get("limit");

  try {
    await connectToDB();

    const products = await Product.find({ category: params.id })
      .limit(limit ? parseInt(limit) : 10)
      .skip(page ? parseInt(page) * 10 : 0);
    const count = await Product.countDocuments({ category: params.id });

    return new Response(
      JSON.stringify({
        products,
        count,
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
