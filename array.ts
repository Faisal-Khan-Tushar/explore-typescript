const number:number=7444;
let  friendsSalary:number[]=[100,300,400,500];
let friendsName:string[]=['tushar','faisal','sneha'];
friendsName[0]='Tushar';
friendsSalary[2]=349343;
// friendsName[2]=3433; //we can't do it because the type of the array 'friendsName' is string
// friendsSalary[1]='Tushar khan';
friendsSalary[3]=3434343;
friendsName[3]='Abdul Kashem';
let max=0;
for(const salary of friendsSalary)
{
  if(salary>max){
    max=salary;
  }
}