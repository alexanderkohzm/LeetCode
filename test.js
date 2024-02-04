const object = {
  a: "45",
};

console.log("This is object befoer: ", object);
function changeObject(object) {
  object.a = "55";
  return object;
}

changeObject(object);

console.log("This is object after: ", object);
