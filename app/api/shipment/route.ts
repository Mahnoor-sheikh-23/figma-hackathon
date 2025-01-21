import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
    console.log("Received request:", req.method);
    const body = await req.json();
    const { from, to, weight, dimensions } = body;
    if (!from || !to || !weight || !dimensions) {
        return NextResponse.json(
            { error: "Missing required shipment details (from, to, weight, dimensions)." },
            { status: 400 }
        );
    }

    
    const shipmentRequest = {
        shipments: [
            {
                service_code: "fedex_ground", 
                ship_to: to,
                ship_from: from,
                packages: [
                    {
                        weight: { value: weight, unit: "ounce" },
                        dimensions: {
                            length: dimensions.length,
                            width: dimensions.width,
                            height: dimensions.height,
                            unit: "inch",
                        },
                    },
                ],
                rate_options: {  // Ensure this is defined and not empty
                    carrier_ids: ['se-1603420'],
                    package_types: ['package'],
                    service_codes: ['fedex_ground'],
                    calculate_tax_amount: true,
                    preferred_currency: 'usd',
                    is_return: false,
                    rate_type: 'check'
                }
            },
        ],
    };

    try {
        // 1. Create a shipment
        const shipmentResponse = await axios.post(
            "https://api.shipengine.com/v1/shipments",
            shipmentRequest,
            {
                headers: {
                    "API-Key": process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY,
                    "Content-Type": "application/json",
                },
            }
        );
        const shipmentId = shipmentResponse.data.shipments[0]?.shipment_id;
        console.log("Shipment created:", shipmentId);

        if (!shipmentId) {
            return NextResponse.json(
                { error: "Failed to create shipment." },
                { status: 500 }
            );
        }

        // 2. Fetch rates using the shipment ID
        const ratesResponse = await axios.post(
            "https://api.shipengine.com/v1/rates",
            {
                shipment_id: shipmentId,
                rate_options: {
                    carrier_ids: ['se-1603420'], // Modify carrier IDs if needed, 'se-1603418'
                    package_types: ['package'],
                    service_codes: ['fedex_ground'], // Modify service codes as necessary
                    calculate_tax_amount: false,
                    preferred_currency: 'usd',
                    is_return: false,
                },
            },
            {
                headers: {
                    "API-Key": process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY,
                    "Content-Type": "application/json",
                },
            }
        );

        const rates = ratesResponse.data?.rate_response?.rates;
        if (!rates || rates.length === 0) {
            return NextResponse.json(
                { error: "No shipping rates available." },
                { status: 500 }
            );
        }

        console.log("Rates retrieved successfully:", rates);

        // 3. Generate a shipping label with the shipment object included
        const labelResponse = await axios.post(
            `https://api.shipengine.com/v1/labels`,
            {
                shipment: {
                    shipment_id: null, // Include the shipment_id
                    service_code: "fedex_ground", // Ensure service code is provided
                    ship_from: from, // Reuse the `from` data
                    ship_to: to, // Reuse the `to` data
                    packages: [
                        {
                            weight: { value: weight, unit: "ounce" },
                            dimensions: {
                                length: dimensions.length,
                                width: dimensions.width,
                                height: dimensions.height,
                                unit: "inch",
                            },
                        },
                    ],
                },
                label_format: "pdf", // Label format (pdf, png, etc.)
                label_download_type: "url", // URL to download the label
            },
            {
                headers: {
                    "API-Key": process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY,
                    "Content-Type": "application/json",
                },
            }
        );

        const labelData = labelResponse.data;
        console.log("Label generated:", labelData);

        if (!labelData.label_download?.href) {
            return NextResponse.json(
                { error: "Failed to generate label." },
                { status: 500 }
            );
        }

        // Return the label URL, tracking number, and rates
        return NextResponse.json({
            shippingRates: rates, // Include the shipping rates
            labelUrl: labelData.label_download.href, // Downloadable label URL
            trackingNumber: labelData.tracking_number, // Tracking number for the shipment
        });

    } catch (error: unknown) {
        console.error("Error:", error);

        if (axios.isAxiosError(error)) {
            console.error("Axios error response:", error.response?.data);
            return NextResponse.json(
                { error: error.response?.data || "An error occurred while processing your request." },
                { status: error.response?.status || 500 }
            );
        } else {
            console.error("Unknown error:", error);
            return NextResponse.json({ error: "Internal server error" }, { status: 500 });
        }
    }
}
