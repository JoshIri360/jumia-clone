import { connectToDB } from "@/utils/database";
import Product from "@/models/products";

interface Params {
  id: string;
}

export const GET = async (req: Request, { params }: { params: Params }) => {
  console.log(req.query);

  try {
    await connectToDB();

    const products = await Product.find({ category: params.id }).limit(20);
    const count = await Product.countDocuments({ category: params.id });
    const page = 1;

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
