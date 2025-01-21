import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }  // Correctly define context with params
) {
  const { id } = await  context.params; // Extract `id` from `context.params`

  try {
    const query = `*[_type == "product" && _id == $id][0]{
        _id,
        category,
        color,
        productName,
        price,
        status,
        inventory,
        image,
        description
    }`;

    const product = await client.fetch(query, { id }); // Pass `id` to the query

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product); // Return the product data
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
