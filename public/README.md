
## Index

**get. index** - 

{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": [
        "I am test or index router"
    ],
    "meta": {}
}


---

## User

**get.fetch.id** - 

{
    "success": true,
    "status": 200,
    "message": "success",
    "data": [
        {
            "id": 1,
            "name": "Martinez Prince",
            "email": "martinezprince@terrasys.com",
            "password": "$2b$10$FMU52eno6EYNOzIsiqV6VupqbHPRW.lF.McN9rhJ3leEO7/lTJcC6",
            "about_me": null,
            "phone": "+971123456789",
            "verified_email": 0,
            "verified_phone": 0,
            "DOB": null,
            "street": "209 Balfour Place, Linwood, Arizona, 9647",
            "city": "Kersey",
            "zipcode": null,
            "state": "Virginia",
            "country": "Viet Nam",
            "picture": null,
            "latitude": null,
            "longitude": null,
            "created_at": "2019-10-29T21:56:44.000Z",
            "updated_at": "2019-10-29T21:56:44.000Z"
        }
    ]
}

---

**post.login** - 

{
    "success": true,
    "status": 200,
    "message": "success",
    "data": [
        {
            "id": 1,
            "name": "Martinez Prince",
            "email": "martinezprince@terrasys.com",
            "password": "$2b$10$FMU52eno6EYNOzIsiqV6VupqbHPRW.lF.McN9rhJ3leEO7/lTJcC6",
            "about_me": null,
            "phone": "+971123456789",
            "verified_email": 0,
            "verified_phone": 0,
            "DOB": null,
            "street": "209 Balfour Place, Linwood, Arizona, 9647",
            "city": "Kersey",
            "zipcode": null,
            "state": "Virginia",
            "country": "Viet Nam",
            "picture": null,
            "latitude": null,
            "longitude": null,
            "created_at": "2019-10-29T21:56:44.000Z",
            "updated_at": "2019-10-29T21:56:44.000Z"
        }
    ],
    "meta": {
        "user_roles": [
            "seller",
            "customer"
        ],
        "email": "martinezprince@terrasys.com"
    }
}

---

**post.register**

error
{
    "success": false,
    "status": 400,
    "message": "genderMissing"
}

{
    "success": true,
    "status": 201,
    "message": "userRegistered",
    "data": [
        17
    ],
    "meta": {
        "user_roles": [
            "customer"
        ],
        "email": "martinezprincwe@terrasys.com"
    }
}

--- 

**post.permission** - 
permission error : 
{
    "success": false,
    "status": 401,
    "message": "unauthorizedRequest"
}

{
    "success": true,
    "status": 201,
    "message": "created",
    "data": [
        7
    ],
    "meta": null
}

---

**post.role** - 
{
    "success": true,
    "status": 201,
    "message": "created",
    "data": [
        7
    ]
}

---

**post.seller** - 

{
    "success": true,
    "status": 201,
    "message": "created",
    "data": [
        5
    ],
    "meta": null
}

---

## Products - 

**post.category** - 
{
    "success": true,
    "status": 201,
    "message": "created",
    "data": [
        7
    ],
    "meta": null
}

---

**post.add** - 
{
    "success": true,
    "status": 201,
    "message": "created",
    "data": [
        7
    ],
    "meta": "created"
}

---

**get.fetch.id** - 
{
    "success": true,
    "status": 200,
    "message": "success",
    "data": [
        {
            "id": 1,
            "sku": "5db1c055eaae9b0a1cc8fd98",
            "name": "abcd2",
            "seller_id": 1,
            "warehouse_id": 1,
            "picture": "http://placehold.it/32x32",
            "quantity": 35,
            "price": 33,
            "one_time_limit": 3,
            "currency": "INR",
            "description": "Commodo duis quis do sit eiusmod do cillum aliqua. Tempor do ipsum sit officia cupidatat veniam ad magna eiusmod qui ipsum cillum nostrud irure. Irure irure duis anim nulla ad dolor eu aute duis ut nostrud est sint. Sunt tempor labore incididunt commodo adipisicing occaecat nisi minim irure in adipisicing non ad culpa. Laborum reprehenderit ex pariatur reprehenderit ad do officia eiusmod incididunt. Excepteur sint cillum deserunt occaecat.\r\n",
            "created_at": "2019-10-29T22:32:21.000Z",
            "updated_at": "2019-10-29T22:32:21.000Z"
        }
    ]
}

---

**update.product** -1

---

**delete.item.id** - 1

---

**put.readd.id** - 1

---

## Orders - 

**get.order.id**
{
    "success": true,
    "status": 200,
    "message": "success",
    "data": [
        {
            "id": 1,
            "user_id": 7,
            "quantity": 2,
            "sub_total": 2,
            "new": 0,
            "created_at": "2019-10-29T22:41:21.000Z",
            "updated_at": "2019-10-29T22:41:21.000Z"
        }
    ]
}

--- 

**post.order**
{
    "success": true,
    "status": 201,
    "message": "created",
    "data": [
        7
    ],
    "meta": null
}

---

**put.order.id** - 1

---

**get.ship.id** - 
{
    "success": true,
    "status": 200,
    "message": "success",
    "data": [
        {
            "id": 1,
            "user_id": 5,
            "order_id": 6,
            "carier_company": "Fedex Inc",
            "carier_id": 2,
            "tracking_id": 0,
            "status": null,
            "created_at": "2019-10-29T23:17:04.000Z",
            "updated_at": "2019-10-29T23:17:04.000Z"
        }
    ]
}

---

**put.ship.id** - 1

---

**post.warehouse** - 
{
    "success": true,
    "status": 201,
    "message": "created",
    "data": [
        7
    ],
    "meta": null
}

---

**post.addToCart** - 
{
    "success": true,
    "status": 200,
    "message": "success",
    "data": null
}

---

**get.cart.id** or **get.activeCart** -
{
    "success": true,
    "status": 200,
    "message": "success",
    "data": []
}

or

{
    "success": true,
    "status": 200,
    "message": "success",
    "data": [
        {
            "id": 12,
            "product_id": 2,
            "user_id": 1,
            "quantity": 4,
            "sub_total": 4,
            "stage": "cart",
            "order_id": 8,
            "created_at": "2019-10-30T10:37:25.000Z",
            "updated_at": "2019-10-30T10:37:45.000Z"
        },
        {
            "id": 13,
            "product_id": 1,
            "user_id": 1,
            "quantity": 2,
            "sub_total": 2,
            "stage": "cart",
            "order_id": 8,
            "created_at": "2019-10-30T10:38:10.000Z",
            "updated_at": "2019-10-30T10:38:10.000Z"
        }
    ]
}

---

**delete.removeCart.id** - 1

---

## Few error cases - 
**existingSeller**

{
    "success": false,
    "status": 400,
    "message": "existingSeller"
}

---

**notFound** - 
{
    "success": false,
    "message": "notFound",
    "type": "Shop Srv",
    "action": "DELETE /shop/v1/order/cart/11",
    "data": [],
    "meta": {}
}

---

## Test emails:

* **seller** - stuartvega@terrasys.com
* **customer** - martinezprince@terrasys.com
* **admin** - barnettpacheco@terrasys.com


**Postman API documnetation link** : <https://documenter.getpostman.com/view/2216605/SW11WyYA>