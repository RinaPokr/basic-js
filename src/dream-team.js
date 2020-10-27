const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  let res = '';
if (Array.isArray(members)) {

 let result = members.reduce(function (previousValue, item) {
return (typeof item === "string") ? previousValue + item.trim()[0] : previousValue;

 }, '');

res = result.toUpperCase().split('').sort().join('');

} else {
  res = false;
}

return res;
};
