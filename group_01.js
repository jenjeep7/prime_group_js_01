function EmployeeObj(firstName, empNum, salary, rating) {
  this.firstName = firstName;
  this.empNum = empNum;
  this.salary = salary;
  this.rating = rating;
}


var atticus = new EmployeeObj("Atticus", "2405", "47000", 3);
var jem = new EmployeeObj("Jem", "62347", "63500", 4);
var boo = new EmployeeObj("Boo", "11435", "54000", 3);
var scout = new EmployeeObj("Scout", "6243", "74750", 5);


var employees = [atticus, jem, boo, scout];


for(var i = 0; i<employees.length; i++) {
  console.log(calculateBonus(employees[i]));
}


function calculateBonus(employee) {
  //if things come in as a string they should have been converted here at the beginning

  var bonus = 0;
  var empName = employee.firstName;

  var empNumber = employee.empNum;
  var salary = parseInt(employee.salary);
  var rating = employee.rating;



  switch(rating) {
    case 3:
    bonus = 4;
    break;
    case 4:
    bonus = 6;
    break;
    case 5:
    bonus = 10;
    break;
  }

if(empNumber.length === 4) {
  bonus += 5;
}
//We added the bonus > 0 to prevent the possiblity of negative bonuses
if(salary > 65000 && bonus>0) {
  bonus -= 1;
}
if(bonus>13) {
  bonus = 13;
}
var result = {};

result.name = (empName);
result.bonus = (bonus.toString()+"%");
var percentBonus = bonus/100;
result.salaryPlusBonus = ("$" + ((salary * percentBonus) + salary).toString());
result.bonus = ("$" + (Math.round(salary * percentBonus).toString()));
return result;

}
