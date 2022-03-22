//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isLeap = (year) => {
  if (year % 400 == 0 && year % 100 == 0 && year % 4 == 0){
    return true;
  }
  else if (year % 4 == 0 && year % 100 == 0){
    return false;
  }
  else if (year % 4 == 0){
    return true;
  }
  else {
    return false;
  }
};

let year = 1997
console.log(isLeap(year))