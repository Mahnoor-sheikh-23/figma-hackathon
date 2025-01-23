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



// import { NextRequest, NextResponse } from "next/server";
// import { client } from "@/sanity/lib/client";

// // Define the expected shape of query parameters
// interface QueryParams {
//     category?: string;
//     search?: string;
// }

// export async function GET(req: NextRequest) {
//     // Parse query parameters manually from the URL
//     const queryParams: QueryParams = new URL(req.url).search.slice(1) // Extract query string (everything after '?')
//         .split("&") // Split into key-value pairs
//         .reduce((acc, pair) => {
//             const [key, value] = pair.split("="); // Split key and value
//             if (key) acc[key as keyof QueryParams] = decodeURIComponent(value || ""); // Decode and type cast key
//             return acc;
//         }, {} as QueryParams);

//     const category = queryParams.category || "all";
//     const search = queryParams.search || "";

//     // Construct the query based on category and search
//     let query: string;
//     let params: Record<string, string> = {};

//     if (search) {
//         // Search products by name
//         query = `*[_type == "product" && productName match $search + "*"]{
//             _id,
//             category,
//             colors,
//             productName,
//             price,
//             inventory,
//             image
//         }`;
//         params = { search };
//     } else if (category === "all") {
//         // Fetch all products
//         query = `*[_type == "product"]{
//             _id,
//             category,
//             colors,
//             productName,
//             price,
//             inventory,
//             image
//         }`;
//     } else {
//         // Fetch products by category
//         query = `*[_type == "product" && category == $category]{
//             _id,
//             category,
//             colors,
//             productName,
//             price,
//             inventory,
//             image
//         }`;
//         params = { category };
//     }

//     try {
//         const data = await client.fetch(query, params);
//         return NextResponse.json({ success: true, data });
//     } catch (error) {
//         console.error("Sanity fetch error:", error);
//         return NextResponse.json({ success: false, error: "Failed to fetch data" }, { status: 500 });
//     }
// }
