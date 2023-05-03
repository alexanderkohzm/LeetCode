// Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

// Implement the TimeMap class:

// TimeMap() Initializes the object of the data structure.
// void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
// String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".
// //

class TimeMap {
  // we store our data in an object
  // the key of the parent object is the "key"
  // the key of the child objects is the "timestamp"
  // the value of the "timestamp" is the "value"
  // note that value is a queue
  // I'm using a queue - FIFO
  public dataMap = {} as {
    [key: string]: {
      listOfTimeStamps: number[];
      values: { [key: number]: string };
    };
  };

  constructor() {}

  set(key: string, value: string, timestamp: number): void {
    // if it does NOT exist, need to set it
    if (!this.dataMap[key]) {
      this.dataMap[key] = {
        listOfTimeStamps: [timestamp],
        values: { [timestamp]: value },
      };
    }

    // if it exists
    this.dataMap[key].values[timestamp] = value;
    // update the timestamp
    this.dataMap[key].listOfTimeStamps.push(timestamp);
  }

  get(key: string, timestamp: number): string {
    if (!this.dataMap[key]) return "";

    const listOfTimeStamps = this.dataMap[key].listOfTimeStamps;
    // if there is a timestamp, return
    if (listOfTimeStamps.includes(timestamp)) {
      return this.dataMap[key].values[timestamp];
    }
    if (timestamp >= listOfTimeStamps[listOfTimeStamps.length - 1]) {
      // get latest one
      return this.dataMap[key].values[
        listOfTimeStamps[listOfTimeStamps.length - 1]
      ];
    } else if (timestamp < listOfTimeStamps[0]) {
      return "";
    } else {
      return this.calculateInBetween(key, timestamp);
    }
  }

  private calculateInBetween(key: string, timestamp: number): string {
    const listOfTimeStamps = this.dataMap[key].listOfTimeStamps;

    for (let i = listOfTimeStamps.length - 1; i > 0; i--) {
      const currentTimeStamp = listOfTimeStamps[i];
      if (currentTimeStamp > timestamp) continue;
      return this.dataMap[key].values[currentTimeStamp];
    }
    return "";
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

const newTimeMap = new TimeMap();
// newTimeMap.set('foo', 'bar', 1)
// console.log(newTimeMap.get('foo', 1))
// console.log(newTimeMap.get("foo", 3))
// newTimeMap.set("foo", "bar2", 4)
// console.log(newTimeMap.get("foo", 4))
// console.log(newTimeMap.get("foo", 5))
// newTimeMap.set("love", "high", 10)
// newTimeMap.set("love", "low", 20)
// console.log(newTimeMap.get("love", 5)) // should be ""
// console.log(newTimeMap.get("love", 10)) // should be high
// console.log(newTimeMap.get("love", 15)) // should be high
// console.log(newTimeMap.get("love", 20)) // shjould be low
// console.log(newTimeMap.get("love", 25)) // shjould be low

newTimeMap.set("a", "bar", 1);
newTimeMap.set("x", "b", 3);
console.log(newTimeMap.get("b", 3));
