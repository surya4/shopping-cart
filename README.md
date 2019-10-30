# Shopping cart using NodeJS and MySQL

## Configuration

- **Platform:** node v12.13.1
- **Framework**: express
- **Database**: mysql with knex
- **Testing**: chai, mocha and istanbul
- **Deployment**: docker and travis
- **AWS**: ECR, ECS, EC2, RDS and ElasticCAche

**Postman API doc url** - <https://documenter.getpostman.com/view/2216605/SW11WyYA>

**Check DB Schema design** - (public/db-design.pdf)

**Code coverage**:
![alt text](/public/test-coverage.png)

APIs are divided in three types

1. Users -
    * **post.register**: create a user
    * **get.fetch.id**: get user data by user id
    * **post.login**: login for user
    * **post.logout**: logout for user
    * **post.permission**: admin can add various roles to user
    * **post.role**: admin can add new roles to system e.g. customer, admin or seller
    * **post.seller**: convert a user to seller

2. Products -
    * **post.category**: admin can create a product category like kitchen
    * **post.add**: seller can add product
    * **get.fetch.id**: get product details by product id
    * **put.update.id**: seller can update product details by product id
    * **delete.item.id**: seller can remove product details by product id
    * **put.readd.id**: seller can re add a deleted product by product id

3. Orders -
    * **post.create**: create a defult order.
    * **get.order.id**: get order details by order id
    * **put.order.id**: update order details by order id
    * **post.addToCart**: add any item into a cart.
    * **get.activeCart.id**: get details of users cart by user id
    * **get.cart.id**: get details of any cart by cart id
    * **delete.removeFromCart**: delete items from cart
    * **post.ship**: create shipment of order
    * **get.ship.id**: get shipment details by shipment id
    * **put.ship.id**: update shipment details by shipment id
    * **post.warehouse.id**: admin can create a warehouse whihc will be attached to product and seller

**API response** - (public/README.md)

### How to run at local

1. download dependencies - node, redis, mysql and docker (optional)
2. Add host details in .env file oresent at root folder
3. run **npm i -g knex** to download knex node module in your system.
4. run **knex:migrate latest** to run migrattion which will create mysql tables whose schema is present uder */migrations* folder.
5. run npm i to install node dependencies
6. finally run **npm start** to fire the app.
7. hit login to get a session and start using APIs.
8. hit npm test to check test cases

### How to run at AWS:
  
1. Create a Redis in AWS from ElasticCache and SQL database from RDS.
2. Create user permission and make sure to keep all in same permission group.
3. Create a key value pair and download it in local.
4. Create docker image at local and push it to ECR repository.
5. Create a ECS Cluster. Create a task and assign the ECR repository to it with docker tag. Also, you can environment variables here. Attach task to the cluster.
6. You can use EC2 public IP to hot the server. MAke sure to add RDS and redis environment variable to the task.
6. Login to awsc-cli using this key -> *ssh -i <key_name>.pem ec2-user@<public dns you can get from EC2 server>* and you can check status of docker and container.