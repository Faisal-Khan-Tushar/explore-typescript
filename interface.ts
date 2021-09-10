interface Player{
  name:string,
  age:number,
  club:string,
  married?:boolean,
  previousClubs?:string[]
}
const messi:Player={
  name:'Lionel Andres Messi',
  age:34,
  club:'Paris Saint Germain',
  married:true,
  previousClubs:['Barcelona','New south whales boys']
}
const romelu:Player={
  name:'Romelu Lukaku',
  age:28,
  club:'Chelsea',
  previousClubs:['Manchester United','Inter Milan']
}
interface Employee{
  name:string,
  age:number,
  designation:string
}
interface Developer extends Employee{
  languages:string,
  codeEditor:string,
  typingSpeed:number,
}
const zuker:Developer={
  name:'Mark Zuckerberg',
  age:45,
  designation:'Ceo of Facebook',
  languages:'Javascript',
  codeEditor:'Vs Code',
  typingSpeed:85,
}