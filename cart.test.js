const cart = require("./cart");
const cars = require("./data/cars");

describe("Cart Properties:", ()=>{
    test("cart to be an empty array",()=>{
        expect(Array.isArray(cart.cart)).toEqual(true);
        expect(cart.cart.length).toEqual(0);
    })
    test("total is equal to 0",()=>{
        expect(cart.total).toEqual(0);
    })
})
describe("Cart Methods:", ()=>{
    afterEach(function() {
        // reset total property
        cart.total = 0;
        // reset cart to empty array
        cart.cart = [];
      });
    test("should add a car obj to cart array", ()=>{
        cart.addToCart(cars[0])
        cart.addToCart(cars[1])
        expect(cart.cart.length).toEqual(2)
        expect(cart.cart[0]).toEqual(cars[0])
        expect(cart.cart[1]).toEqual(cars[1])
    })
    test("should increase the total", ()=>{
        cart.addToCart(cars[4])
        cart.addToCart(cars[3])
        cart.addToCart(cars[6])
        expect(cart.total).toEqual(cars[4].price+cars[3].price+cars[6].price)
    })
    test("remove car obj from cart array",()=>{
        cart.addToCart(cars[0])
        cart.addToCart(cars[1])
        cart.addToCart(cars[2])
        cart.removeFromCart(1,cars[1])
        expect(cart.cart.length).toEqual(2)
        expect(cart.cart[0]).toEqual(cars[0])
        expect(cart.cart[1]).toEqual(cars[2])
    })
    test("price should decrease by the price of the car removed",()=>{
        cart.addToCart(cars[0])
        cart.addToCart(cars[1])
        cart.addToCart(cars[2])
        cart.removeFromCart(3,cars[2])
        expect(cart.total).toEqual(cars[0].price+cars[1].price)
    })
    test("cart array length should be 0 and total should be 0",()=>{
        cart.addToCart( cars[0] );
        cart.addToCart( cars[1] );
        cart.addToCart( cars[2] );
        cart.addToCart( cars[3] );
        cart.checkout()
        expect(cart.cart.length).toEqual(0);
        expect(cart.total).toEqual(0);
    })

})