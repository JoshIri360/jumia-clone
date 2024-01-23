import { connectToDB } from "@/utils/database";
import Product from "@/models/products";

export const GET = async (req: Request, res: Response) => {
  console.log(req);

  try {
    await connectToDB();

    const products = await Product.find({ category: "yoga" }).limit(20);

    return new Response(JSON.stringify(products), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ msg: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
