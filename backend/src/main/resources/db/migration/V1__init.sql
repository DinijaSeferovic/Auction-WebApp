CREATE TABLE category
(
    id          UUID DEFAULT gen_random_uuid() NOT NULL,
    name        VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE subcategory
(
    id          UUID DEFAULT gen_random_uuid() NOT NULL,
    name        VARCHAR(255) NOT NULL,
    category_id UUID,
    PRIMARY KEY (id),
    FOREIGN KEY(category_id)
        REFERENCES category(id)
);

CREATE TABLE product
(
    id          UUID DEFAULT gen_random_uuid() NOT NULL,
    name        VARCHAR(255) NOT NULL,
    category_id UUID,
    subcategory_id UUID,
    description VARCHAR(255) NOT NULL,
    image_path  VARCHAR(255),
    seller_id   INTEGER,
    start_price DOUBLE PRECISION NOT NULL,
    start_date  TIMESTAMP NOT NULL,
    end_date    TIMESTAMP NOT NULL,
    buyer_id    INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY(category_id)
        REFERENCES category(id),
    FOREIGN KEY(subcategory_id)
        REFERENCES subcategory(id)
);


