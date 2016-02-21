# What is T16
T16 is a software solution for location based on delivery service. It is actually very similar to "getir". The key difference we aimed to implement is the ability to place a future order and place a regular order.

This is aimed to bring back the "kapici" character in our lives. The concept is still alive in some places but in a crowded city like istanbul, a doorman takes care of multiple apartments. So not every apartment can get "2 breads, 1 milk, 1 newspaper" every morning. 

We planned to add a future to be able to place and order which takes places on every chosen day at designated time.

This is the iOS implementation.

# OK Backend
- Provides basic Auth
- Provides basic and easy Rest API
- Easily editable
- Logs with Winston

# To-Do
- Create a Redis connection and store Cart data there. Also the regular order lists.
- Improve authentication. Maybe add some social login features.
- Add socket.io to communicate live order status and location.
- Add a GUI to track orders, payments and storage.
- Actual "add to cart" and "order" is not working. So backend doesn't check for warehouses status or the product status and quantities. This should be implemented first hand!