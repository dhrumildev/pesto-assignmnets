-- Create the CITIES table
CREATE TABLE CITIES
(
    CITY CHAR(20) PRIMARY KEY,
    STATE CHAR(20) NOT NULL
);

-- Create the WAREHOUSES table
CREATE TABLE WAREHOUSES
(
    WID INTEGER PRIMARY KEY,
    WNAME CHAR(30) NOT NULL,
    LOCATION CHAR(20) REFERENCES CITIES(CITY),
    EXTRA_CONTEXT JSONB
);

-- Create the STORES table
CREATE TABLE STORES
(
    SID INTEGER PRIMARY KEY,
    STORE_NAME CHAR(20) NOT NULL,
    LOCATION_CITY CHAR(20) REFERENCES CITIES(CITY),
    WID INTEGER REFERENCES WAREHOUSES(WID)
);

-- Create the CUSTOMER table
CREATE TABLE CUSTOMER
(
    CNO INTEGER PRIMARY KEY,
    CNAME CHAR(50) NOT NULL,
    ADDR VARCHAR(50),
    CU_CITY CHAR(20) REFERENCES CITIES(CITY)
);

-- Create the ORDERS table
CREATE TABLE ORDERS
(
    ONO INTEGER PRIMARY KEY,
    ODATE DATE NOT NULL,
    CNO INTEGER REFERENCES CUSTOMER(CNO)
);

-- Create the ITEMS table
CREATE TABLE ITEMS
(
    ITEMNO INTEGER PRIMARY KEY,
    DESCRIPTION TEXT NOT NULL,
    WEIGHT DECIMAL(5,2) NOT NULL,
    COST DECIMAL(5,2) NOT NULL
);

-- Create the M:M relationship table for ORDERS and ITEMS
CREATE TABLE ORDER_ITEMS
(
    ONO INTEGER REFERENCES ORDERS(ONO),
    ITEMNO INTEGER REFERENCES ITEMS(ITEMNO),
    ORDERED_QUANTITY INTEGER NOT NULL
);

-- Create the M:M relationship table for STORES and ITEMS
CREATE TABLE STORE_ITEMS
(
    SID INTEGER REFERENCES STORES(SID),
    ITEMNO INTEGER REFERENCES ITEMS(ITEMNO),
    QUANTITY INTEGER NOT NULL
);



-- INSERTION QUERIES


-- Insert data into CITIES table
INSERT INTO CITIES
    (CITY, STATE)
VALUES
    ('Pune', 'Maharashtra'),
    ('Mumbai', 'Maharashtra'),
    ('Bangalore', 'Karnataka'),
    ('Delhi', 'Delhi');

-- Insert data into WAREHOUSES table
INSERT INTO WAREHOUSES
    (WID, WNAME, LOCATION, EXTRA_CONTEXT)
VALUES
    (1, 'Central Warehouse', 'Pune', jsonb('{"capacity": 10000}')),
    (2, 'Western Warehouse', 'Mumbai', jsonb('{"capacity": 5000}')),
    (3, 'Southern Warehouse', 'Bangalore', jsonb('{"capacity": 8000}'));

-- Insert data into STORES table
INSERT INTO STORES
    (SID, STORE_NAME, LOCATION_CITY, WID)
VALUES
    (1, 'Store 1', 'Pune', 1),
    (2, 'Store 2', 'Mumbai', 2),
    (3, 'Store 3', 'Bangalore', 3),
    (4, 'Store 4', 'Pune', 1);

-- Insert data into CUSTOMERS table
INSERT INTO CUSTOMER
    (CNO, CNAME, ADDR, CU_CITY)
VALUES
    (1, 'Mr. Patil', '123 Main St, Pune', 'Pune'),
    (2, 'Ms. Sharma', '456 Park Ave, Mumbai', 'Mumbai'),
    (3, 'Mr. Khan', '789 Market Rd, Bangalore', 'Bangalore');

-- Insert data into ORDERS table
INSERT INTO ORDERS
    (ONO, ODATE, CNO)
VALUES
    (1, '2024-02-01', 1),
    (2, '2024-02-15', 2),
    (3, '2024-02-20', 1),
    (4, '2024-02-25', 3);

-- Insert data into ITEMS table
INSERT INTO ITEMS
    (ITEMNO, DESCRIPTION, WEIGHT, COST)
VALUES
    (1, 'Shirt', 0.5, 20.00),
    (2, 'Jeans', 1.0, 30.00),
    (3, 'T-Shirt', 0.25, 15.00),
    (4, 'Shoes', 2.0, 50.00);


-- Insert data into ORDER_ITEMS table (simulating orders)
INSERT INTO ORDER_ITEMS
    (ONO, ITEMNO, ORDERED_QUANTITY)
VALUES
    (1, 1, 2),
    -- Order 1: 2 Shirts
    (1, 2, 1),
    -- Order 1: 1 Jeans
    (2, 3, 3),
    -- Order 2: 3 T-Shirts
    (4, 4, 2);
-- Order 4: 2 Shoes

-- Insert data into STORE_ITEMS table (simulating stock)
INSERT INTO STORE_ITEMS
    (SID, ITEMNO, QUANTITY)
VALUES
    (1, 1, 10),
    -- Store 1: 10 Shirts
    (1, 2, 5),
    -- Store 1: 5 Jeans
    (2, 3, 20),
    -- Store 2: 20 T-Shirts
    (3, 4, 15),
    -- Store 3: 15 Shoes
    (4, 1, 3),
    -- Store 4: 3 Shirts
    (4, 3, 7);  -- Store 4: 7 T-Shirts
