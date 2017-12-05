var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject1 = Object.assign({}, object, {[key]:value});
  return newObject1;
}