// schemas/order.ts
import { defineType } from "sanity";
export default defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "customerEmail",
      title: "Customer Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "customerContact",
      title: "Customer Contact",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "shippingData",
      title: "Shipping Data",
      type: "object",
      fields: [
        {
          name: "labelUrl",
          title: "Label URL",
          type: "url",
        },
        {
          name: "trackingNumber",
          title: "Tracking Number",
          type: "string",
        },
        {
          name: "shippingRates",
          title: "Shipping Rates",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "carrierCode",
                  title: "Carrier Code",
                  type: "string",
                },
                {
                  name: "carrierDeliveryDays",
                  title: "Carrier Delivery Days",
                  type: "string",
                },
                {
                  name: "carrierFriendlyName",
                  title: "Carrier Friendly Name",
                  type: "string",
                },
                {
                  name: "carrierId",
                  title: "Carrier ID",
                  type: "string",
                },
                {
                  name: "serviceCode",
                  title: "Service Code",
                  type: "string",
                },
                {
                  name: "shipDate",
                  title: "Ship Date",
                  type: "datetime",
                },
                {
                  name: "zone",
                  title: "Zone",
                  type: "number",
                },
                {
                  name: "shippingAmount",
                  title: "Shipping Amount",
                  type: "object",
                  fields: [
                    {
                      name: "currency",
                      title: "Currency",
                      type: "string",
                    },
                    {
                      name: "amount",
                      title: "Amount",
                      type: "number",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "shippingRate",
      title: "Shipping Rate",
      type: "string",
    },
    {
      name: "orderStatus",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Processing", value: "processing" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    },
  ],
});
