// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.


// https://www.youtube.com/watch?v=oobqoCJlHA0

// INSERT METHOD
// you create a node
// and add on child nodes 
// e.g. for apple 
// a -> p -> p -> l -> e
// but note that you have to mark the "e" to indicate that it's at the end of the word you inserted

// SEARCH METHOD
// Go to the root
// does the root have the child you're looking for (e.g. "a")
// does "a" have a child "p" character
// keep going till the end of the word 
// Does the end have a "mark" that says it's the end of a word? 
// If it it does, return true. If not, return false 

// STARTS WITH
// Similar to SEARCH but we don't need the "end of the word" 


class TrieNode {
  public children: Map<string, TrieNode>;
  public isEndOfWord: boolean;

  constructor() {
    this.children = new Map<string, TrieNode>();
    this.isEndOfWord = false;
  }
}

class Trie {

  public root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }


  insert(word: string): void {
    let currentNode = this.root;

    for (const letter of word) {
      if (!currentNode.children.has(letter)) {
        currentNode.children.set(letter, new TrieNode())
      }
      currentNode = currentNode.children.get(letter)!
    }
    currentNode.isEndOfWord = true;
  }

  search(word: string): boolean {

    let currentNode = this.root;

    for (const letter of word) {
      if (!currentNode.children.has(letter)) {
        return false;
      }
      // if not, go to next
      currentNode = currentNode.children.get(letter)!
    }
    return currentNode.isEndOfWord
  }

  startsWith(prefix: string): boolean {
    let currentNode = this.root;

    for (const letter of prefix) {
      if (!currentNode.children.has(letter)) {
        return false;
      }
      // if not, go to next
      currentNode = currentNode.children.get(letter)!
    }
    return true
  }
}

/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/
