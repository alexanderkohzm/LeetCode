// Given a list of accounts where each element accounts[i] is a list of strings,
// where the first element accounts[i][0] is a name,
// and the rest of the elements are emails representing emails of the account.

// Now, we would like to merge these accounts.
// Two accounts definitely belong to the same person if there is some
// common email to both accounts.
// Note that even if two accounts have the same name, they may belong
// to different people as people could have the same name.
// A person can have any number of accounts initially,
// but all of their accounts definitely have the same name.

// After merging the accounts,
// return the accounts in the following format:
// the first element of each account is the name,
// and the rest of the elements are emails in sorted order.
// The accounts themselves can be returned in any order.

function accountsMerge(accounts: string[][]): string[][] {
  let graph = {} as { [key: string]: Set<string> };
  let nameDictionary = {} as { [key: string]: string };

  for (let account of accounts) {
    let name = account[0];

    nameDictionary[account[1]] = name;
    for (let i = 1; i < account.length; i++) {
      if (!graph[account[i]]) graph[account[i]] = new Set();
      nameDictionary[account[i]] = name;
      nameDictionary[account[i]] = name;
      if (i != 1) {
        graph[account[1]].add(account[i]);
        graph[account[i]].add(account[1]);
      }
    }
  }

  let result = [] as Array<Array<string>>;
  let visited = new Set();

  let depthFirstSearch = function (key: string): Array<string> {
    visited.add(key);
    let emails = [key];
    graph[key].forEach((e) => {
      if (!visited.has(e)) {
        emails.push(...depthFirstSearch(e));
      }
    });
    return emails;
  };

  for (let key in graph) {
    if (!visited.has(key)) {
      let temporary = depthFirstSearch(key);
      temporary.sort();
      temporary.unshift(nameDictionary[temporary[0]]);
      result.push(temporary);
    }
  }
  return result;
}

// const accounts = [
//   ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
//   ["John", "johnsmith@mail.com", "john00@mail.com"],
//   ["Mary", "mary@mail.com"],
//   ["John", "johnnybravo@mail.com"],
// ];

// console.log(accountsMerge(accounts));

// const accounts2 = [
//   ["Gabe", "Gabe0@m.co", "Gabe3@m.co", "Gabe1@m.co"],
//   ["Kevin", "Kevin3@m.co", "Kevin5@m.co", "Kevin0@m.co"],
//   ["Ethan", "Ethan5@m.co", "Ethan4@m.co", "Ethan0@m.co"],
//   ["Hanzo", "Hanzo3@m.co", "Hanzo1@m.co", "Hanzo0@m.co"],
//   ["Fern", "Fern5@m.co", "Fern1@m.co", "Fern0@m.co"],
// ];

// console.log(accountsMerge(accounts2));

const accounts3 = [
  ["Alex", "Alex5@m.co", "Alex4@m.co", "Alex0@m.co"],
  ["Ethan", "Ethan3@m.co", "Ethan3@m.co", "Ethan0@m.co"],
  ["Kevin", "Kevin4@m.co", "Kevin2@m.co", "Kevin2@m.co"],
  ["Gabe", "Gabe0@m.co", "Gabe3@m.co", "Gabe2@m.co"],
  ["Gabe", "Gabe3@m.co", "Gabe4@m.co", "Gabe2@m.co"],
];

console.log(accountsMerge(accounts3));

const accounts4 = [
  ["David", "David0@m.co", "David1@m.co"],
  ["David", "David3@m.co", "David4@m.co"],
  ["David", "David4@m.co", "David5@m.co"],
  ["David", "David2@m.co", "David3@m.co"],
  ["David", "David1@m.co", "David2@m.co"],
];
console.log(accountsMerge(accounts4));
