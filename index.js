var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject1 = Object.assign({}, object, {[key]:value});
  return newObject1;
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  var object = Object.assign(object, {[key:value}]});
  return object
}