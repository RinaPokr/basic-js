const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  
  let str1 = (str === undefined) ? '' : String(str);
  
   let repeatTimess = (options.repeatTimes === undefined) ? 0 : options.repeatTimes;
     let separatorr = (options.separator === undefined) ? '+' : options.separator;

  let additionn = (options.addition === undefined) ? '' : String(options.addition);
  let additionRepeatTimess = (options.additionRepeatTimes === undefined) ? 0 : options.additionRepeatTimes;
  let additionSeparatorr = (options.additionSeparator == undefined) ? '|' : options.additionSeparator;
 let addition1 = additionn;
   for (let index = 0; index < additionRepeatTimess - 1; index++) {
    addition1 = addition1 + additionSeparatorr + additionn;
    }
  let res = str1 + addition1;
  for (let index = 0; index < repeatTimess - 1; index++) {
    res = res  + separatorr + str1 + addition1;
     }
return res;
};
  