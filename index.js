var uniq = require('uniq');
module.exports = function() {
  var ar = [1,1,2,2,3,3];
  console.log(uniq(ar));
}
