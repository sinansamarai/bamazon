CREATE DATABASE IF NOT EXISTS bamazon;
USE bamazon ;

CREATE TABLE IF NOT EXISTS products(

item_id INTEGER(11) auto_increment NOT null,
product_name VARCHAR(30) NOT NULL,
stock_quantity INTEGER (10),
department_name VARCHAR(30),
price INTEGER (10),
PRIMARY KEY (item_id)
);
SELECT * FROM bamazon.products;
INSERT INTO products (product_name,stock_quantity,department_name,price)
VALUES ("Coffee", 50 , "Breakfast", 9);
INSERT INTO products (product_name,stock_quantity,department_name,price)
VALUES ("Cereal", 60 , "Breakfast", 5);
INSERT INTO products (product_name,stock_quantity,department_name,price)
VALUES ("Chicken", 80 , "Lunch", 15);
INSERT INTO products (product_name,stock_quantity,department_name,price)
VALUES ("Meat", 160 , "Lunch", 25);
INSERT INTO products (product_name,stock_quantity,department_name,price)
VALUES ("Fish", 30 , "Dinner", 19);
INSERT INTO products (product_name,stock_quantity,department_name,price)
VALUES ("Tuna", 90 , "Dinner", 13);
INSERT INTO products (product_name,stock_quantity,department_name,price)
VALUES ("Beer", 600 , "Bevarge", 6);
INSERT INTO products (product_name,stock_quantity,department_name,price)
VALUES ("White Wine", 600 , "Bevarge", 66);
INSERT INTO products (product_name,stock_quantity,department_name,price)
VALUES ("Red Wine", 600 , "Bevarge", 56);
