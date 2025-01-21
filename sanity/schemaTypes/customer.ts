// schemas/customer.js
export default {
    name: 'customer',
    title: 'Customer',
    type: 'document',
    fields: [
      {
        name: 'firstName',
        title: 'First Name',
        type: 'string',
      },
      {
        name: 'lastName',
        title: 'Last Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'contact',
        title: 'Contact Number',
        type: 'string',
      },
      {
        name: 'addressLine1',
        title: 'Address Line 1',
        type: 'string',
      },
      {
        name: 'addressLine2',
        title: 'Address Line 2',
        type: 'string',
      },
      {
        name: 'addressLine3',
        title: 'Address Line 3',
        type: 'string',
      },
      {
        name: 'city',
        title: 'City',
        type: 'string',
      },
      {
        name: 'postalCode',
        title: 'Postal Code',
        type: 'string',
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        readOnly: true,
        options: {
          dateFormat: 'YYYY-MM-DD',
        },
        initialValue: () => new Date().toISOString(),
      },
    ],
  };
  