function myDateTime   () { //IT IS A LOCAL MODULE
  return Date();
}

function add(a,b){
  return a+b;
}
function sub(a,b){
  return a-b;
}
module.exports={
  add,
  sub,
  myDateTime
};