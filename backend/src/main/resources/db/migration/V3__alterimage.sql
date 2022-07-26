CREATE TABLE image
(
    id          UUID DEFAULT gen_random_uuid() NOT NULL,
    image_path   VARCHAR(255) NOT NULL,
    product_id UUID,
    PRIMARY KEY (id),
    FOREIGN KEY(product_id)
        REFERENCES product(id)
);

ALTER TABLE product
    DROP COLUMN image_path;


INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-running-shoes3.png',
           '31aa90d5-33a4-4ed8-970a-e3789eb44b40'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-running-shoes2.png',
           '31aa90d5-33a4-4ed8-970a-e3789eb44b40'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-running-shoes.png',
           '31aa90d5-33a4-4ed8-970a-e3789eb44b40'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-woman-shirt.png',
           'a9734bfc-d5ac-4bb1-a4e4-d2c305b5e522'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-woman-shirt2.png',
           'a9734bfc-d5ac-4bb1-a4e4-d2c305b5e522'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-running-shoes.png',
           'f9b4fe52-38bc-4536-ae78-4ccf9c53b062'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-running-shoes2.png',
           'f9b4fe52-38bc-4536-ae78-4ccf9c53b062'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-running-shoes3.png',
           'f9b4fe52-38bc-4536-ae78-4ccf9c53b062'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-paper-bag.png',
           'c29a7cbb-d475-4257-a00f-d505b86cf154'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-paper-bag2.png',
           'c29a7cbb-d475-4257-a00f-d505b86cf154'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-running-shoes2.png',
           'd79e0d54-7f52-4385-b772-abcebecd6d4a'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-running-shoes.png',
           'd79e0d54-7f52-4385-b772-abcebecd6d4a'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-running-shoes3.png',
           'd79e0d54-7f52-4385-b772-abcebecd6d4a'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-candles.png',
           '34ca9b75-aafd-4476-8db9-109e6d959d92'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-candles2.png',
           '34ca9b75-aafd-4476-8db9-109e6d959d92'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-cutlery.png',
           'e40721da-af7e-48b5-a165-366cbd4e50bc'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-cutlery2.png',
           'e40721da-af7e-48b5-a165-366cbd4e50bc'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-plate.png',
           '047551a5-6ee9-4337-ab21-67b672e629b7'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-plate2.png',
           '047551a5-6ee9-4337-ab21-67b672e629b7'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-woman-bag.png',
           'b192cc19-4b02-4b78-8fa1-a5f88c9c9525'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-woman-bag2.png',
           'b192cc19-4b02-4b78-8fa1-a5f88c9c9525'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-man-shirt2.png',
           '46e5fe79-ab85-4334-b240-cd28c0f190a2'
       );


INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-man-shirt.png',
           '46e5fe79-ab85-4334-b240-cd28c0f190a2'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-man-shirt.png',
           '8690b0f0-a21a-42b4-925b-2b67a602bb5c'
       );


INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-man-shirt2.png',
           '8690b0f0-a21a-42b4-925b-2b67a602bb5c'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-running-shoes.png',
           '832a59dd-e72e-4b0b-9afe-b28536b2d086'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-running-shoes2.png',
           '832a59dd-e72e-4b0b-9afe-b28536b2d086'
       );

INSERT INTO image (
    image_path,
    product_id)
VALUES (
           '/products/product-running-shoes3.png',
           '832a59dd-e72e-4b0b-9afe-b28536b2d086'
       );