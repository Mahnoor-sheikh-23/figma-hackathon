import { NextRequest, NextResponse } from 'next/server';
import client from '@/sanityClient';

interface ShippingAmount {
  currency: string;
  amount: number;
}

interface ShippingRate {
  carrierCode: string;
  carrierDeliveryDays: number;
  carrierFriendlyName: string;
  carrierId: string;
  serviceCode: string;
  shipDate: string;
  zone: string;
  shippingAmount: ShippingAmount;
}

// interface ShippingData {
//   labelUrl: string;
//   trackingNumber: string;
//   shippingRates: ShippingRate[];
// }


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Destructure data from the request body
    const {
      customerName,
      customerEmail,
      customerContact,
      shippingData,
      shippingRate,
      orderStatus = 'pending',
    } = body;

    // Validate required fields
    if (!customerName || !customerEmail || !customerContact || !shippingData) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare the order document
    const orderDocument = {
      _type: 'order',
      customerName,
      customerEmail,
      customerContact,
      shippingData: {
        labelUrl: shippingData.labelUrl,
        trackingNumber: shippingData.trackingNumber,
        shippingRates: shippingData.shippingRates.map((rate: ShippingRate) => ({
          carrierCode: rate.carrierCode,
          carrierDeliveryDays: rate.carrierDeliveryDays,
          carrierFriendlyName: rate.carrierFriendlyName,
          carrierId: rate.carrierId,
          serviceCode: rate.serviceCode,
          shipDate: rate.shipDate,
          zone: rate.zone,
          shippingAmount: {
            currency: rate.shippingAmount.currency,
            amount: rate.shippingAmount.amount,
          },
        })),
      },
      shippingRate,
      orderStatus,
      createdAt: new Date().toISOString(),
    };

    // Save the document to Sanity
    const result = await client.create(orderDocument);

    // Respond with success
    return NextResponse.json(
      { message: 'Order created successfully', orderId: result._id },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error creating order:', error.message, error.stack);
      return NextResponse.json(
        { message: 'Internal Server Error', error: error.message },
        { status: 500 }
      );
    } else {
      // Handle non-Error types (rare but possible)
      console.error('Unexpected error:', error);
      return NextResponse.json(
        { message: 'Internal Server Error', error: 'Unknown error occurred' },
        { status: 500 }
      );
    }
  }
}
