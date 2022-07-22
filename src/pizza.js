'strict mode'
// business logic

export default class Pizza {
  constructor(size,topping) {
    this.size = size;
    this.topping = topping;
    this.price = 0
  }
}
Pizza.prototype.setPrice = function() {

  if(this.size === 'small'){
    this.price += 9
  } else if (this.size === 'medium'){
    this.price += 11
  } else {
    this.price += 13
  }
}
