INSERT INTO category (name)
VALUES ('Fashion');

INSERT INTO category (name)
VALUES ('Accessories');

INSERT INTO category (name)
VALUES ('Jewelry');

INSERT INTO category (name)
VALUES ('Shoes');

INSERT INTO category (name)
VALUES ('Sportware');

INSERT INTO category (name)
VALUES ('Home');

INSERT INTO category (name)
VALUES ('Electronics');

INSERT INTO category (name)
VALUES ('Mobile');

INSERT INTO category (name)
VALUES ('Computer');

INSERT INTO category (name)
VALUES ('Women');

INSERT INTO category (name)
VALUES ('Men');

INSERT INTO category (name)
VALUES ('Kids');

INSERT INTO product (
    name,
    category_id,
    subcategory_id,
    description,
    image_path,
    seller_id,
    start_price,
    start_date,
    end_date,
    buyer_id)
VALUES (
        'Shoes Collection',
        null,
        null,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit odio a erat lobortis auctor. Curabitur sodales pharetra placerat. Aenean auctor luctus tempus. Cras laoreet et magna in dignissim. Nam et tincidunt augue.',
        '["/products/product-running-shoes3.png","/products/product-running-shoes2.png","/products/product-running-shoes.png"]',

        null,
        59.00,
        '2022-07-12 12:10:00',
        '2022-07-25 12:30:00',
        null);

INSERT INTO product (
    name,
    category_id,
    subcategory_id,
    description,
    image_path,
    seller_id,
    start_price,
    start_date,
    end_date,
    buyer_id)
VALUES (
           'Clothes Collection',
           null,
           null,
           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit odio a erat lobortis auctor. Curabitur sodales pharetra placerat. Aenean auctor luctus tempus. Cras laoreet et magna in dignissim. Nam et tincidunt augue.',
           '["/products/product-woman-shirt.png","/products/product-woman-shirt2.png","/products/woman-shirt.png"]',
           null,
           52.00,
           '2022-06-16 12:00:00',
           '2022-12-25 12:00:00',
           null);

INSERT INTO product (
    name,
    category_id,
    subcategory_id,
    description,
    image_path,
    seller_id,
    start_price,
    start_date,
    end_date,
    buyer_id)
VALUES (
           'Shoes Collection',
           null,
           null,
           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit odio a erat lobortis auctor. Curabitur sodales pharetra placerat. Aenean auctor luctus tempus. Cras laoreet et magna in dignissim. Nam et tincidunt augue.',
           '["/products/product-running-shoes.png","/products/product-running-shoes2.png","/products/product-running-shoes3.png"]',
           null,
           56.00,
           '2022-05-05 12:00:00',
           '2022-07-20 18:00:00',
           null);

INSERT INTO product (
    name,
    category_id,
    subcategory_id,
    description,
    image_path,
    seller_id,
    start_price,
    start_date,
    end_date,
    buyer_id)
VALUES (
           'Bags Collection',
           null,
           null,
           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit odio a erat lobortis auctor. Curabitur sodales pharetra placerat. Aenean auctor luctus tempus. Cras laoreet et magna in dignissim. Nam et tincidunt augue.',
           '["/products/product-paper-bag.png","/products/product-paper-bag2.png"]',
           null,
           40.00,
           '2022-07-10 12:10:00',
           '2022-07-24 17:00:00',
           null);

INSERT INTO product (
    name,
    category_id,
    subcategory_id,
    description,
    image_path,
    seller_id,
    start_price,
    start_date,
    end_date,
    buyer_id)
VALUES (
           'Shoes Collection',
           null,
           null,
           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit odio a erat lobortis auctor. Curabitur sodales pharetra placerat. Aenean auctor luctus tempus. Cras laoreet et magna in dignissim. Nam et tincidunt augue.',
           '["/products/product-running-shoes2.png","/products/product-running-shoes.png","/products/product-running-shoes3.png"]',
           null,
           55.00,
           '2022-04-12 10:00:00',
           '2022-09-22 12:00:00',
           null);

INSERT INTO product (
    name,
    category_id,
    subcategory_id,
    description,
    image_path,
    seller_id,
    start_price,
    start_date,
    end_date,
    buyer_id)
VALUES (
           'Candles Collection',
           null,
           null,
           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit odio a erat lobortis auctor. Curabitur sodales pharetra placerat. Aenean auctor luctus tempus. Cras laoreet et magna in dignissim. Nam et tincidunt augue.',
           '["/products/product-candles.png","/products/product-candles2.png"]',
           null,
           79.00,
           '2022-04-12 10:00:00',
           '2022-11-12 18:00:00',
           null);

INSERT INTO product (
    name,
    category_id,
    subcategory_id,
    description,
    image_path,
    seller_id,
    start_price,
    start_date,
    end_date,
    buyer_id)
VALUES (
           'Cutlery Collection',
           null,
           null,
           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit odio a erat lobortis auctor. Curabitur sodales pharetra placerat. Aenean auctor luctus tempus. Cras laoreet et magna in dignissim. Nam et tincidunt augue.',
           '["/products/product-cutlery.png","/products/product-cutlery2.png"]',
           null,
           54.00,
           '2022-04-12 10:00:00',
           '2022-08-10 12:00:00',
           null);

INSERT INTO product (
    name,
    category_id,
    subcategory_id,
    description,
    image_path,
    seller_id,
    start_price,
    start_date,
    end_date,
    buyer_id)
VALUES (
           'Dishes Collection',
           null,
           null,
           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit odio a erat lobortis auctor. Curabitur sodales pharetra placerat. Aenean auctor luctus tempus. Cras laoreet et magna in dignissim. Nam et tincidunt augue.',
           '["/products/product-plate.png","/products/product-plate2.png"]',
           null,
           50.00,
           '2022-04-20 12:00:00',
           '2022-09-15 13:00:00',
           null);

INSERT INTO product (
    name,
    category_id,
    subcategory_id,
    description,
    image_path,
    seller_id,
    start_price,
    start_date,
    end_date,
    buyer_id)
VALUES (
           'Bags Collection',
           null,
           null,
           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit odio a erat lobortis auctor. Curabitur sodales pharetra placerat. Aenean auctor luctus tempus. Cras laoreet et magna in dignissim. Nam et tincidunt augue.',
           '["/products/product-woman-bag.png","/products/product-woman-bag2.png"]',
           null,
           60.00,
           '2022-05-22 10:00:00',
           '2022-09-22 12:00:00',
           null);

INSERT INTO product (
    name,
    category_id,
    subcategory_id,
    description,
    image_path,
    seller_id,
    start_price,
    start_date,
    end_date,
    buyer_id)
VALUES (
           'Clothes Collection',
           null,
           null,
           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit odio a erat lobortis auctor. Curabitur sodales pharetra placerat. Aenean auctor luctus tempus. Cras laoreet et magna in dignissim. Nam et tincidunt augue.',
           '["/products/product-man-shirt2.png","/products/product-man-shirt.png"]',
           null,
           49.00,
           '2022-06-10 10:00:00',
           '2023-01-10 15:00:00',
           null);

INSERT INTO product (
    name,
    category_id,
    subcategory_id,
    description,
    image_path,
    seller_id,
    start_price,
    start_date,
    end_date,
    buyer_id)
VALUES (
           'Clothes Collection',
           null,
           null,
           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit odio a erat lobortis auctor. Curabitur sodales pharetra placerat. Aenean auctor luctus tempus. Cras laoreet et magna in dignissim. Nam et tincidunt augue.',
           '["/products/product-man-shirt.png","/products/product-man-shirt2.png"]',
           null,
           57.00,
           '2022-06-12 10:00:00',
           '2022-11-11 15:00:00',
           null);

INSERT INTO product (
    name,
    category_id,
    subcategory_id,
    description,
    image_path,
    seller_id,
    start_price,
    start_date,
    end_date,
    buyer_id)
VALUES (
           'Shoes Collection',
           null,
           null,
           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit odio a erat lobortis auctor. Curabitur sodales pharetra placerat. Aenean auctor luctus tempus. Cras laoreet et magna in dignissim. Nam et tincidunt augue.',
           '["/products/product-running-shoes.png","/products/product-running-shoes2.png", "/products/product-running-shoes3.png"]',
           null,
           59.00,
           '2022-07-12 12:10:00',
           '2022-07-21 16:00:00',
           null);