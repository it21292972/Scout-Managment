export const badgeexColumns = [
  { field: "warrantID", headerName: "Warrant ID", width: 180 },

  {
    field: "firstName",
    headerName: "First Name ",
    width: 140,
  },

  {
    field: "lastName",
    headerName: "Last Name",
    width: 140,
  },

  {
    field: "userName",
    headerName: "User Name",
    width: 140,
  },

  {
    field: "address",
    headerName: "Address",
    width: 140,
  },

  {
    field: "contact",
    headerName: "Contact",
    width: 260,
  },
];

export const BERequestColumns = [
  { field: "IssueId", headerName: "Issue Id", width: 180 },

  {
    field: "scoutId",
    headerName: "Scout ID",
    width: 140,
  },

  {
    field: "scoutName",
    headerName: "Scout Name",
    width: 140,
  },

  {
    field: "badgeName",
    headerName: "Badge Name",
    width: 140,
  },

  {
    field: "passedDate",
    headerName: "Date",
    width: 140,
  },
 
  {
    field: "remark",
    headerName: "Remark",
    width: 260,
  },
];

export const requestColumns = [
  { field: "requestId", headerName: "Request Id", width: 180 },
  {
    field: "scoutId",
    headerName: "Scout Id",
    width: 180,
  },

  {
    field: "scoutName",
    headerName: "Scout Name",
    width: 250,
  },

  {
    field: "badgeName",
    headerName: "Badge Name",
    width: 180,
  },
]; 

export const eventColumns = [
  {
    field: "eventAttendance", 
    headerName: "Event Attendance", 
    width: 230,
  },
  { 
    field: "eventDetails", 
    headerName: "Event Details", 
    width: 230 },
  {
    field: "eventBudget",
    headerName: "Event Budget",
    width: 230,
  },

  {
    field: "eventsId",
    headerName: "Events Id",
    width: 220,
  },
];


export const productColumns = [
  {
    field: "productId",
    headerName: "Product ID",
    width: 180,
  },
  {
    field: "productName",
    headerName: "Product Name",
    width: 250,
  },
  {
    field: "productPrice",
    headerName: "Unit Purchase Price(Rs.)",
    width: 300,
  },
  {
    field: "productQuantity",
    headerName: "Quantity",
    width: 200,
  },
  {
    field: "totalPrice",
    headerName: "Total Price(Rs.)",
    width: 200,
    valueGetter: (params) => {
      const product = params.row;
      return product.productPrice * product.productQuantity;
    },
  },
];


  export const supplierColumns = [
    {
      field: "supplierId", 
      headerName: "Supplier ID", 
      width: 160,
    },
    { 
      field: "supplierName", 
      headerName: "Supplier Name", 
      width: 250 },
    {
      field: "supplierEmail",
      headerName: "Supplier Email",
      width: 300,
    },
  
    {
      field: "supplierPhone",
      headerName: "Supplier Phone",
      width: 200,
    },
    {
      field: "productName",
      headerName: "Product Name",
      width: 200,
    },
    
  ];

  export const badgeColumns = [
    { field: "section", headerName: "Section", width: 130 },
  
    {
      field: "name",
      headerName: "Name",
      width: 200,
    },
  
    {
      field: "badge",
      headerName: "Badge",
      width: 120,
    },
  
    {
      field: "BEName",
      headerName: "Badge Examiner Name",
      width: 160,
    },
  
    {
      field: "TRNumber",
      headerName: "Troop No",
      width: 100,
    },
  
    {
      field: "REGNumber",
      headerName: "Reg No",
      width: 110,
    },
  
  {
    field: "smID",
    headerName: "Scout Master ID",
    width: 140,
   },
  
   {
    field: "BEid",
    headerName: "Badge Examiner ID",
    width: 140,
   },
  ];
  
  export const findexaminer = [
    { field: "Badge",
      headerName: "Badge",
      width: 150
     },
  
    {
      field: "Name",
      headerName: "Name",
      width: 300,
    },
  
    {
      field: "Address",
      headerName: "Address",
      width: 450,
    },
  
    {
      field: "Email",
      headerName: "Email",
      width: 290,
    },
  
    {
      field: "Telephone",
      headerName: "Telephone",
      width: 150,
    },
  
  
  ];
  

  export const userColumns = [
  

    {
      field: "first_name",
      headerName: "first_name",
      width: 200,
    },
  
    {
      field: "last_name",
      headerName: "last_name",
      width: 200,
    },
  
    {
      field: "id",
      headerName: "id",
      width: 160,
    },
  
    {
      field: "date_of_birth",
      headerName: "date_of_birth",
      width: 100,
    },
  
    {
      field: "user_name",
      headerName: "user_name ",
      width: 110,
    },
  
  {
    field: "password",
    headerName: "password",
    width: 140,
   },
  
   {
    field: "registration_number",
    headerName: "registration_number",
    width: 140,
   },
   {
      field: "troop_name",
      headerName: "troop_name",
      width: 140,
     },
     {
      field: "troop_number",
      headerName: "troop_number",
      width: 140,
     },
     {
      field: "date_of_join",
      headerName: "date_of_join",
      width: 140,
     },
     {
      field: "address",
      headerName: "address",
      width: 140,
     },
     {
      field: "mobile",
      headerName: "mobile",
      width: 140,
     },
     {
      field: "name_of_the_guardian",
      headerName: "name_of_the_guardian",
      width: 140,
     },
     {
      field: "guardian_contact",
      headerName: "guardian_contact",
      width: 140,
     },
  ];
  
  export const BRColumns = [
    
  
    {
      field: "first_name",
      headerName: "first_name",
      width: 200,
    },
  
    {
      field: "last_name",
      headerName: "last_name",
      width: 200,
    },
  
    {
      field: "id",
      headerName: "id",
      width: 160,
    },
  
    {
      field: "date_of_birth",
      headerName: "date_of_birth",
      width: 100,
    },
  
    {
      field: "user_name",
      headerName: "user_name ",
      width: 110,
    },
  
  {
    field: "password",
    headerName: "password",
    width: 140,
   },
  
   {
    field: "registration_number",
    headerName: "registration_number",
    width: 140,
   },
   {
      field: "troop_name",
      headerName: "troop_name",
      width: 140,
     },
     {
      field: "troop_number",
      headerName: "troop_number",
      width: 140,
     },
     {
      field: "date_of_join",
      headerName: "date_of_join",
      width: 140,
     },
     {
      field: "address",
      headerName: "address",
      width: 140,
     },
     {
      field: "mobile",
      headerName: "mobile",
      width: 140,
     },
     {
      field: "name_of_the_guardian",
      headerName: "name_of_the_guardian",
      width: 140,
     },
     {
      field: "guardian_contact",
      headerName: "guardian_contact",
      width: 140,
     },
  ];