let name = 'chrys';
let age = '30';
function 한살더먹음() {
  age +=1;
}
function 값가져오기() {
  return age
}



module.exports.name = name;
module.exports.age = age;
module.exports.한살더먹음 = 한살더먹음;
module.exports.값가져오기 = 값가져오기;