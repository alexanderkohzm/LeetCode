function newMessage(topicName) {
  // Write your code here

  // receives the name of the topic as the parameter
  // function should change the background color of the p tag to red
  // when data-topic-name is topicName

  // if topicName doesn't have a matching data-topic-name it should be ignored

  // get the element
  const element = document.querySelector(`p[data-topic-name="${topicName}"]`);

  // early return if no element found
  if (!element) return;

  console.log("This is element: ", element);

  element.style.backgroundColor = "red";
}

// Example case
document.body.innerHTML = `<div>
  <p data-topic-name="discussion">General discussion</p>
  <p data-topic-name="bugs">Bugs</p>
  <p data-topic-name="animals">Animals</p>
</div>`;
newMessage("discussion");
console.log(document.body.innerHTML);
