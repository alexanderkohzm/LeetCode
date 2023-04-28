function flattenDictionary(dict) {

    const resultHashMap = {} 
  
    // // {[key: string]: string}
    function depthFirstSearch(
      currentStringOrObject,
      keyToKeepTrack
    ) {
        if (typeof currentStringOrObject === "string") {
              resultHashMap[keyToKeepTrack] = currentStringOrObject;
        } else {
            const keys = Object.keys(currentStringOrObject)
            for (const key of keys) {
                const currentValue = currentStringOrObject[key];
                if(keyToKeepTrack == "") {
                    depthFirstSearch(currentValue, `${key}`)
                } else if (key == "") {
                    depthFirstSearch(currentValue, `${keyToKeepTrack}`)
                } else {
                    depthFirstSearch(currentValue, `${keyToKeepTrack}.${key}`)
                }
            }
        }
    }

    const keys = Object.keys(dict)
    for (const key of keys) {
        const value = dict[key]

        if (typeof value !== "string") {
            // recursion
            depthFirstSearch(value, key)
        } else {
            resultHashMap[key.toString()] = value
        }
    }

    return resultHashMap
  }

  const input = {
    "Key1":"1",
    "Key2":{
        "a":"2",
        "b":"3",
        "c":{
            "d":"3",
            "e":"1"
          }
      }
    }
  
  console.log(flattenDictionary(input))
