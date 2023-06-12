/**
 *
 * getElemeentsByTagName() is a method which exists on the Document and Element objects and returns an
 * HTMLCollection of descendant elements within the Document/Element given a tag name.
 *
 * Let's implement our own Element.getElementsByTagName() by with slight differences:
 * 1. It is a pure function which takes in an element and a tag name string
 * 2. Like Element.getElementsByTagName(), only descendants of the specified element are searched, not the element itself
 * 3. Return an array of Element(s) instead of HTMLCollection of Element(s)
 *
 */

/**
 * @param {Element} rootElement
 * @param {string} tagName
 * @return {Array<Element>}
 */
function getElementsByTagName(rootElement, tagName) {
  // what we could do is get ALL childElements
  const elements = [];
  const parsedTagName = tagName.toUpperCase();

  function traverse(element) {
    if (element === null) {
      return;
    }

    if (element.tagName === parsedTagName) {
      elements.push(element);
    }
    for (let i = 0; i < element.children.length; i++) {
      traverse(element.children[i]);
    }
  }

  for (let i = 0; i < rootElement.children.length; i++) {
    traverse(rootElement.children[i]);
  }
  return elements;
}
