// Create a decorator for adding a sauce to Pizza instances:
function Sauce(sauce:string){
  return (constructor: Function) => {
    constructor.prototype.sauce = sauce;
  }
}

@Sauce('pesto')
class Pizza {
  sauce() {
    console.log(this.sauce);
    
  }
}


let pizza = new Pizza();
console.log(pizza.sauce);

