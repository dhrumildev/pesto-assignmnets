-- Find the item with the minimum weight
SELECT *
FROM ITEMS
WHERE WEIGHT = (SELECT MIN(WEIGHT)
FROM ITEMS);

-- Find the different warehouses in "Pune"
SELECT DISTINCT WNAME
FROM WAREHOUSES
    INNER JOIN CITIES ON WAREHOUSES.LOCATION = CITIES.CITY
WHERE CITIES.CITY = 'Pune';

-- Find the details of items ordered by a customer named "Mr. Patil"
SELECT
    o.ONO, o.ODATE, i.ITEMNO, i.DESCRIPTION, oi.ORDERED_QUANTITY
FROM ORDERS o
    INNER JOIN CUSTOMER c ON o.CNO = c.CNO
    INNER JOIN ORDER_ITEMS oi ON o.ONO = oi.ONO
    INNER JOIN ITEMS i ON oi.ITEMNO = i.ITEMNO
WHERE c.CNAME = 'Mr. Patil';


-- Find a Warehouse that has the maximum number of stores
select
    w.WID,
    w.WNAME,
    w.LOCATION,
    COUNT(s.SID) as num_stores
from
    WAREHOUSES w
    left join STORES s on
	w.WID = s.WID
group by
	w.WID,
	w.WNAME,
	w.LOCATION
order by
	num_stores desc
limit 1;


-- Find an item that is ordered for a minimum number of times
 select
	i
.ITEMNO,
	i.DESCRIPTION,
	COUNT
(oi.ONO) as num_orders
from
	ITEMS i
inner join ORDER_ITEMS oi on
	i.ITEMNO = oi.ITEMNO
group by
	i.ITEMNO,
	i.DESCRIPTION
order by
	num_orders asc
limit 1;

-- Find the detailed orders given by each customer
SELECT
    c.CNO, c.CNAME, o.ONO, o.ODATE
FROM CUSTOMER c
    INNER JOIN ORDERS o ON c.CNO = o.CNO
ORDER BY c.CNO, o.ONO;