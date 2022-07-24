import Pizza from '../src/js/pizza.js';


describe ('Pizza', () => {

  test('should return Pizza class', () => {
    const pizza = new Pizza();
    expect(pizza.size).toEqual();
    expect(pizza.topping).toEqual()
    expect(pizza.price).toEqual(0)
  });

  test('return setPrice for pizza', () => {
    const myPizza = new Pizza('small');
    myPizza.setPrice();
    expect(myPizza.price).toEqual(9);
  });
  test('return setPrice for pizza', () => {
    const myPizza = new Pizza('medium');
    myPizza.setPrice();
    expect(myPizza.price).toEqual(11);
  });
  test('return setPrice for pizza', () => {
    const myPizza = new Pizza();
    myPizza.setPrice();
    expect(myPizza.price).toEqual(13);
  }); 
  
  test('return setToppingPrice for pizza', () => {
    const myPizza = new Pizza('blank');
    myPizza.setToppingPrice();
    expect(myPizza.topping).toEqual();
  });
  test('return setToppingPrice for pizza', () => {
    const myPizza = new Pizza('cheese');
    myPizza.setToppingPrice();
    expect(myPizza.topping).toEqual();
  });
  test('return setToppingPrice for pizza', () => {
    const myPizza = new Pizza('pepperoni');
    myPizza.setToppingPrice();
    expect(myPizza.topping).toEqual();
  });
;



});

// describe ('setPrice', () => {
  
//   test('return setPrice for pizza', () => {
//     const pizza = new Pizza();
//     expect(setPrice(this.topping)).toBe('small');
//   });
// });