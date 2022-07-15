CREATE TABLE category
(
    id          SERIAL NOT NULL,
    name        VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE subcategory
(
    id          SERIAL NOT NULL,
    name        VARCHAR(255),
    category_id INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY(category_id)
        REFERENCES category(id)
);

CREATE TABLE product
(
    id          SERIAL NOT NULL,
    name        VARCHAR(255),
    category_id INTEGER,
    subcategory_id INTEGER,
    description VARCHAR(255),
    image       VARCHAR(255),
    seller_id   INTEGER,
    start_price DOUBLE PRECISION,
    start_date  TIMESTAMP,
    end_date    TIMESTAMP,
    active      BOOLEAN,
    sold        BOOLEAN,
    size        VARCHAR(255),
    color       VARCHAR(255),
    buyer_id    INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY(category_id)
        REFERENCES category(id),
    FOREIGN KEY(subcategory_id)
        REFERENCES subcategory(id)
);


