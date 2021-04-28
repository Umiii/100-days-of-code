### These test cases are for tests on the sauce demo website - [title] (https://www.saucedemo.com/)

**Authentication Scenarios**
- Login with valid username & password
- Validate error message when password is invalid
- Validate error message when password is empty

**Links Tests**
- Login - Validate working 'all items' link in hamburger menu
- Login - Validate working 'about' link in hamburger menu
- Login - Validate working close button in hamburger menu
- Login - Validate working 'reset app state' link in hamburger menu

**Add to Cart e2e Scenarios**
- Login - Click on first item - Add to cart
- Login - Click on last item - Add to cart
- Login - Add 3 random items on the page to Cart
- Login - Add Item to cart from Homepage - View Cart
- Login - Add Item to Cart from product page - View Cart
- Login - Add random items to cart & validate the count




Note: Implement an afterEach for Logout