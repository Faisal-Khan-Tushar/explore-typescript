class Car{
  model:string;
  price:number;
  millage:number;
  constructor(model:string,price:number){
    this.model=model;
    this.price=price;
    this.millage=10000;
    
  }
  getActualMillage():number{
 const realMillage=this.millage+5000;
 return realMillage;
  }
  getTotalPrice(tax:number):number{
    const realPrice=this.price*tax/100;
    const totalPrice =this.price+realPrice;
    return totalPrice;
  }
}
const toyota=new Car('Toyota',10000)