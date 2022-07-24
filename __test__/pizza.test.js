import Pizza from './../src/pizza.js';


describe ('Pizza', () => {

  test('should return Pizza class', () => {
    const pizza = new Pizza();
    expect(pizza.size).toEqual();
    expect(pizza.topping).toEqual()
    expect(pizza.price).toEqual(0)
  });
});

describe ('Pizza.prototype.setPrice', () => {
  
  test('return Pizza.prototype.setPrice for pizza', () => {
    const pizza = new Pizza();
    expect(Pizza.prototype.setPrice('small')).toBe(9);
  });
});