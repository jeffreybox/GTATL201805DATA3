-- RECON NOTES:
-- 67416.51 = Customer sum
-- 67416.51 = Payment table sum <-- everything should equal this
-- 67405.56 = Store sum
-- 67406.56 = Genre sum 

-- PAYMENT TABLE: 67416.51

select sum(amount)
from payment;

-- CUSTOMER: 

SELECT c.first_name, c.last_name, sum(p.amount)
FROM customer c
LEFT JOIN payment p ON (c.customer_id = p.customer_id)
GROUP BY c.first_name, c.last_name;

-- GENRES: 67406.56

SELECT name, sum(amount) as revenue
FROM payment
JOIN rental
	ON (payment.rental_id = rental.rental_id)
JOIN inventory
	ON (rental.inventory_id = inventory.inventory_id)
JOIN film
	ON (inventory.film_id = film.film_id)
JOIN film_category
	ON (film.film_id = film_category.film_id)
JOIN category
	ON (category.category_id = film_category.category_id)
GROUP BY name
ORDER BY revenue desc;

-- STORES: 67405.56

SELECT store_id, sum(amount) as "Total Sales"
FROM staff
JOIN rental on (staff.staff_id = rental.staff_id)
JOIN payment on (rental.rental_id = payment.rental_id)
GROUP BY store_id;