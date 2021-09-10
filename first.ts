let money:number=500;
let myName:string='Faisal khan Tushar';
let falsy:boolean=false;

console.log(money)

function addition(first:number | string,second:number | string):number | string{
  const result:number | string =first+second;
  return result;
}
function doubleTheNumber(number:number):void{
  number=2*number;

}
addition(45,50)
addition('Tushar','Khan')