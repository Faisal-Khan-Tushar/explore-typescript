type person={
  name:string,
  age:number,
  uni:string
}

let student:person={
  name:'Faisal khan tushar',
  age:343,
  uni:'Diu'
}

let employee:{name:string,age:number,uni:string}={
  name:'Hiroshima kauke',
  age:34343,
  uni:'minesota'
}
let array:number[]=[1,2,3,4,5]

function getSalary(player:{name?:string,salary:number}):number{
  return player.salary;
}

getSalary({salary:50})

function getSalary2(player:person):number{
  return player.age;
}
// let player:[number|string]="Neymar"
let player:(number|string)="neymar"; 
// let player:[number | string]="neymar"
// let player:[number && string]="neymar"
let fullName=(first:string, last:string)=>first+last;