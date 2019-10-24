// schema 
const user_json = [
  '{{repeat(5, 7)}}',
  {
    id: '{{index()}}',
    picture: 'http://placehold.it/32x32',
    age: '{{integer(20, 40)}}',
    name: '{{firstName()}} {{surname()}}',
    gender: '{{gender()}}',
    email: '{{email()}}',
    password: '{{objectId()}}',
    phone: '+971 {{phone()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    city: '{{city()}}',
    state: '{{state()}}',
    country: '{{country()}}',
    about: '{{lorem(1, "paragraphs")}}',
    verified_email: '{{bool()}}',
    verified_phone: '{{bool()}}',
    latitude: '{{floating(-90.000001, 90)}}',
    longitude: '{{floating(-180.000001, 180)}}',
    updated_at: '{{date(new Date(2019, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    created_at: '{{date(new Date(2019, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
  }
];

const user_permission_json = [
  '{{repeat(5, 7)}}',
  {
    id: '{{index()}}',
    user_id: 'http://placehold.it/32x32',
    role_id: '{{integer(20, 40)}}',
    updated_at: '{{date(new Date(2019, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    created_at: '{{date(new Date(2019, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
  }
];

const user_role_json = [
  '{{repeat(5, 7)}}',
  {
    id: '{{index()}}',
    role: '{{random("admin", "customer")}}',
    updated_at: '{{date(new Date(2019, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    created_at: '{{date(new Date(2019, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
  }
];

const invalidate_token_json = [
  '{{repeat(5, 7)}}',
  {
    id: '{{index()}}',
    token: '{{index()}}',
    expires_in: '{{date(new Date(2019, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    updated_at: '{{date(new Date(2019, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    created_at: '{{date(new Date(2019, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
  }
];

// product schema
const product_category_json = [
  '{{repeat(5, 7)}}',
  {
    id: '{{index()}}',
    category: '{{random("admin", "customer")}}',
    updated_at: '{{date(new Date(2019, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    created_at: '{{date(new Date(2019, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
  }
];

const products_json = [
  '{{repeat(5, 7)}}',
  {
    id: '{{index()}}',
    sku: '{{objectId()}}',
    seller_id: '{{index()}}',
    warehouse_id: '{{index()}}',
    pictures: ['http://placehold.it/32x32','http://placehold.it/32x32','http://placehold.it/32x32' ],
    quantity: '{{integer(20, 40)}}',
    price: '{{integer(20, 40)}}',
    currency: '{{"INR"}}',
    one_time_limit: '{integer(5, 20)}}',
    description: '{{lorem(1, "paragraphs")}}',
    updated_at: '{{date(new Date(2019, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    created_at: '{{date(new Date(2019, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
  }
];

const seller_json = [
  '{{repeat(5, 7)}}',
  {
    id: '{{index()}}',
    user_id: '{{index()}}',
    about_us: '{{lorem(1, "paragraphs")}}',
    logo: 'http://placehold.it/32x32',
    name: '{{firstName()}} {{surname()}}',
    verified: '{{bool()}}',
    email: '{{email()}}',
    phone: '+971 {{phone()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    city: '{{city()}}',
    state: '{{state()}}',
    country: '{{country()}}',
    latitude: '{{floating(-90.000001, 90)}}',
    longitude: '{{floating(-180.000001, 180)}}',
    updated_at: '{{date(new Date(2019, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    created_at: '{{date(new Date(2019, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
  }
];

const warehouse_json = [
  '{{repeat(5, 7)}}',
  {
    id: '{{index()}}',
    seller_id: '{{index()}}',
    pictures: 'http://placehold.it/32x32',
    description: '{{lorem(1, "paragraphs")}}',
    verified: '{{bool()}}',
    email: '{{email()}}',
    phone: '+971 {{phone()}}',
    location: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    city: '{{city()}}',
    state: '{{state()}}',
    country: '{{country()}}',
    description: '{{lorem(1, "paragraphs")}}',
    latitude: '{{floating(-90.000001, 90)}}',
    longitude: '{{floating(-180.000001, 180)}}',
    updated_at: '{{date(new Date(2019, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    created_at: '{{date(new Date(2019, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
  }
];
// cart schema
const orders_json = [
  '{{repeat(5, 7)}}',
  {
    id: '{{index()}}',
    product_id: '{{index()}}',
    user_id: '{{index()}}',
    quantity: '{integer(5, 20)}}',
    sub_total: '{integer(5, 20)}}',
    stage: '{{random("cart", "save_later", "ordered")}}',
    updated_at: '{{date(new Date(2019, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    created_at: '{{date(new Date(2019, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
  }
];