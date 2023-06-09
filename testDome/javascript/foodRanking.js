function setup() {
  // Write your code here
  // users can rank their favourite foods
  // This setup function should register click handlers on all Up! and Down! buttons
  // Up! buttons should move the list item one place up in the list
  // Down! should move the list item one place down in the list

  // need to add event handlers for Up and Down buttons

  // get all up buttons
  const upButtons = [];
  const downButtons = [];
  const buttons = document.getElementsByTagName("button");
  for (const button of buttons) {
    if (button.textContent === "Up!") {
      upButtons.push(button);
    }
    if (button.textContent === "Down!") {
      downButtons.push(button);
    }
  }
  for (const button of upButtons) {
    button.addEventListener("click", () => {
      const parentElement = button.parentElement;
      const parentSiblingBefore = parentElement.previousElementSibling;

      if (parentSiblingBefore) {
        const parentContainer = parentElement.parentNode;
        parentContainer.insertBefore(parentElement, parentSiblingBefore);
      }
    });
  }

  // do the same for down

  for (const button of downButtons) {
    button.addEventListener("click", () => {
      const parentElement = button.parentElement;
      const parentSiblingAfter = parentElement.nextElementSibling;

      if (parentSiblingAfter) {
        const parentContainer = parentElement.parentNode;
        parentContainer.insertBefore(parentSiblingAfter, parentElement);
      }
    });
  }
}

// Example case
document.body.innerHTML = `<ol>
  <li><button>Up!</button>Taco<button>Down!</button></li>
  <li><button>Up!</button>Pizza<button>Down!</button></li>
  <li><button>Up!</button>Eggs<button>Down!</button></li>
</ol>`;

setup();
document.getElementsByTagName("button")[2].click();

console.log(document.body.innerHTML);
