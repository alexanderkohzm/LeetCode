export type DictType = {
  [key: string]: string | DictType;
};

function flattenDictionary(dict: DictType): DictType {
  const resultHashMap = {} as { [key: string]: string };

  // // {[key: string]: string}
  function depthFirstSearch(
    currentStringOrObject: string | DictType,
    keyToKeepTrack: string
  ) {
    if (typeof currentStringOrObject === "string") {
      resultHashMap[keyToKeepTrack] = currentStringOrObject;
    } else {
      const keys = Object.keys(currentStringOrObject);
      for (const key of keys) {
        const currentValue = currentStringOrObject[key];
        if (keyToKeepTrack == "") {
          depthFirstSearch(currentValue, `${key}`);
        } else if (key == "") {
          depthFirstSearch(currentValue, `${keyToKeepTrack}`);
        } else {
          depthFirstSearch(currentValue, `${keyToKeepTrack}.${key}`);
        }
      }
    }
  }

  const keys = Object.keys(dict);
  for (const key of keys) {
    const value = dict[key];

    if (typeof value !== "string") {
      // recursion
      depthFirstSearch(value, key);
    } else {
      resultHashMap[key.toString()] = value;
    }
  }

  return resultHashMap;
}
const exampleDict = {
  Key1: "1",
  Key2: {
    a: "2",
    b: "3",
  },
};

console.log(flattenDictionary(exampleDict));

//   result : {
//               "Key1" : "1",
//               "Key2.a" : "2",
//               "Key2.b" : "3",
//               "Key2.c.d" : "3",
//               "Key2.c.e" : "1"
//           }

//   "Key1" : "1"
//   "Key2.a" : "2"
// dict = {"Key1": "1", "Key2": {"a":"2"}}
