CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
    price INTEGER(7) NOT NULL,
    stock_quantity INTEGER (10)
);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("DR. Pepper","Food",1,300);
INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Bike","Sports",200,10);
INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Shoes","Footwear",40,50);
INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("TV","Entertainment",600,20);
INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Video Game","Software",59,50);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Computer","Entertainment",400,15);
INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Steak","Food",6,30);
INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Sheets","Home Stuff",15,30);
INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Milk","Food",3,100);
INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Cheese","Food",4,40);