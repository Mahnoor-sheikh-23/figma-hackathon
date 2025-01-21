export default {
    name: 'order',
    type: 'document',
    fields: [
      { name: 'customerName', type: 'string', title: 'Customer Name' },
      { name: 'customerEmail', type: 'string', title: 'Customer Email' },
      { name: 'customerPhone', type: 'string', title: 'Customer Phone' },
      { name: 'customerAddress', type: 'text', title: 'Customer Address' },
      { 
        name: 'items', 
        type: 'array', 
        of: [{ type: 'reference', to: [{ type: 'product' }] }], 
        title: 'Ordered Items' 
      },
      { name: 'total', type: 'number', title: 'Total Amount' },
      { name: 'tax', type: 'number', title: 'Tax Amount' },
      { name: 'deliveryCharge', type: 'number', title: 'Delivery Charge' },
      { 
        name: 'orderStatus', 
        type: 'string', 
        title: 'Order Status', 
        options: { 
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Confirmed', value: 'confirmed' },
            { title: 'Shipped', value: 'shipped' },
            { title: 'Delivered', value: 'delivered' }
          ] 
        }
      },
      { name: 'orderDate', type: 'datetime', title: 'Order Date' },
      { name: 'deliveryDate', type: 'datetime', title: 'Delivery Date' },
      { 
        name: 'paymentStatus', 
        type: 'string', 
        title: 'Payment Status', 
        options: { 
          list: [
            { title: 'Paid', value: 'paid' },
            { title: 'Pending', value: 'pending' },
            { title: 'Failed', value: 'failed' }
          ] 
        }
      },
      { name: 'paymentMethod', type: 'string', title: 'Payment Method' },
      { name: 'transactionId', type: 'string', title: 'Transaction ID' }
    ]
  };
  