function getFullname(firstname ,surname, useFormalName){
  return useFormalName === true ?  'Lord '+ firstname+' '+ surname :  firstname+' '+ surname;
}
const fullname1 = getFullname('Farzaneh', 'Ahmadi');
const fullname2 = getFullname('Hamid', 'Khoshakhlagh',true);
console.log(fullname1)
console.log(fullname2)
