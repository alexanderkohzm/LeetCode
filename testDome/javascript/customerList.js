function showCustomers(customers, targetList) {
  // Your code goes here

  // renders customers as list items

  // targetList = you need to render the customers in it

  // name + email should be added as two paragraphs
  // email should NOT be present in the DOM. It should only be added after Name is clicked.
  // Clicking on name the second time will remove the email.

  // first render the customers as a list of items
  for (const customer of customers) {
    const { name, email } = customer;
    const listItem = document.createElement("li");
    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = name;

    // need to add the functionality of clicking on name
    // note: CANNOT use style: display none. This does not match acceptance criteria because technically the <p> is rendered in the dom. we need to append or remove child
    function handleNameClick() {
      // check if email exists
      const emailParagraph = listItem.querySelector(".email");

      if (!emailParagraph) {
        const emailParagraph = document.createElement("p");
        emailParagraph.textContent = email;
        emailParagraph.className = "email";
        listItem.appendChild(emailParagraph);
      } else {
        listItem.removeChild(emailParagraph);
      }
    }
    nameParagraph.addEventListener("click", handleNameClick);
    listItem.appendChild(nameParagraph);

    targetList.appendChild(listItem);
  }
}

document.body.innerHTML = `
<div>
  <ul id="customers">
  </ul>
</div>
`;
let customers = [
  { name: "John", email: "john@example.com" },
  { name: "Mary", email: "mary@example.com" },
];
showCustomers(customers, document.getElementById("customers"));

let customerParagraph = document.querySelectorAll("li > p")[0];
if (customerParagraph) {
  customerParagraph.click();
}
console.log(document.body.innerHTML);
