import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category") || "all";
    const search = searchParams.get("search") || "";

    // Construct the query based on category and search
    let query;
    let params: Record<string, string> = {};

    if (search) {
        // Search products by name
        query = `*[_type == "product" && productName match $search + "*"]{
            _id,
            category,
            colors,
            productName,
            price,
            inventory,
            image
        }`;
        params = { search };
    } else if (category === "all") {
        // Fetch all products
        query = `*[_type == "product"] {
            _id,
            category,
            colors,
            productName,
            price,
            inventory,
            image
        }`;
    } else {
        // Fetch products by category
        query = `*[_type == "product" && category == $category]{
            _id,
            category,
            colors,
            productName,
            price,
            inventory,
            image
        }`;
        params = { category };
    }

    try {
        const data = await client.fetch(query, params);
        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Sanity fetch error:", error);
        return NextResponse.json({ success: false, error: "Failed to fetch data" }, { status: 500 });
    }
}

