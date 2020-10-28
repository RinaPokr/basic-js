const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  let res = '';
  if (date === undefined) {
    res = 'Unable to determine the time of year!';
  } else if (Object.prototype.toString.call(date) !== '[object Date]') {
throw new Error('Error');
   
  } else {

    let month = date.getMonth();
    res = (month < 2) ? 'winter' : (month < 5) ? 'spring' : (month < 8) ? 'summer' : (month < 11) ? 'autumn' : 'winter';
  }
   
return res;
};