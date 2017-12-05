var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  newObject1 = Object.assign({}, object, {[key]:value});
  return newObject1;
}