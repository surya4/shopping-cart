const orders_json = [
  {
    "id": 0,
    "product_id": 2,
    "user_id": 8,
    "quantity":2,
    "sub_total":2,
    "new": 1,
    "updated_at": "2019-09-10T11:20:10 -04:00",
    "created_at": "2019-06-04T10:04:52 -04:00"
  },
  {
    "id": 1,
    "product_id": 1,
    "user_id": 7,
    "quantity":2,
    "sub_total":2,
    "stage": "cart",
    "updated_at": "2019-09-10T11:20:10 -04:00",
    "created_at": "2019-06-04T10:04:52 -04:00"
  },
  {
    "id": 1,
    "product_id": 1,
    "user_id": 5,
    "quantity":2,
    "sub_total":2,
    "new": 0,
    "updated_at": "2019-09-10T11:20:10 -04:00",
    "created_at": "2019-06-04T10:04:52 -04:00"
  },
  {
    "id": 1,
    "product_id": 1,
    "user_id": 6,
    "quantity":2,
    "sub_total":2,
    "new": 0,
    "updated_at": "2019-09-10T11:20:10 -04:00",
    "created_at": "2019-06-04T10:04:52 -04:00"
  },
  {
    "id": 1,
    "product_id": 2,
    "user_id": 5,
    "quantity":2,
    "sub_total":2,
    "new": 0,
    "updated_at": "2019-09-10T11:20:10 -04:00",
    "created_at": "2019-06-04T10:04:52 -04:00"
  },
]

const carts_json = [
  {
    "id": 0,
    "product_id": 2,
    "user_id": 8,
    "quantity":2,
    "sub_total":2,
    "stage": "cart",
    "order_id": 2,
    "updated_at": "2019-09-10T11:20:10 -04:00",
    "created_at": "2019-06-04T10:04:52 -04:00"
  },
  {
    "id": 1,
    "product_id": 1,
    "user_id": 7,
    "quantity":2,
    "sub_total":2,
    "stage": "cancelled",
    "order_id": 1,
    "updated_at": "2019-09-10T11:20:10 -04:00",
    "created_at": "2019-06-04T10:04:52 -04:00"
  },
  {
    "id": 1,
    "product_id": 3,
    "user_id": 5,
    "quantity":2,
    "sub_total":2,
    "stage": "cart",
    "order_id": 4,
    "updated_at": "2019-09-10T11:20:10 -04:00",
    "created_at": "2019-06-04T10:04:52 -04:00"
  },
  {
    "id": 1,
    "product_id": 4,
    "user_id": 6,
    "quantity":2,
    "sub_total":2,
    "stage": "cart",
    "order_id": 5,
    "updated_at": "2019-09-10T11:20:10 -04:00",
    "created_at": "2019-06-04T10:04:52 -04:00"
  },
  {
    "id": 1,
    "product_id": 2,
    "user_id": 5,
    "quantity":2,
    "sub_total":2,
    "stage": "preparing",
    "order_id": 6,
    "updated_at": "2019-09-10T11:20:10 -04:00",
    "created_at": "2019-06-04T10:04:52 -04:00"
  },
]

const ship_json = [
  {
    "id": 0,
    "user_id": 5,
    "carier_id":2,
    "carier_company": "Fedex Inc",
    "order_id": 6,
    "status":"ordered",
    "updated_at": "2019-09-10T11:20:10 -04:00",
    "created_at": "2019-06-04T10:04:52 -04:00"
  },
  {
    "id": 1,
    "user_id": 7,
    "carier_id":2,
    "carier_company": "Blue Dart, Inc",
    "order_id": 1,
    "tracking_id": 1,
    "status":"delivered",
    "updated_at": "2019-09-10T11:20:10 -04:00",
    "created_at": "2019-06-04T10:04:52 -04:00"
  }
]

module.exports = {
  orders_json,
  carts_json,
  ship_json
}