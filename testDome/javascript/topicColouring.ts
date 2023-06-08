function newMessage(topicName: string) {
  // Write your code here

  // get the dom element 
  const element = document.querySelector(`p[data-topic-name="${topicName}"]`)

  if (!element) return

  element.style.backgroundColor = 'red'
}

// Example case
document.body.innerHTML = `<div>
  <p data-topic-name="discussion">General discussion</p>
  <p data-topic-name="bugs">Bugs</p>
  <p data-topic-name="animals">Animals</p>
</div>`;
newMessage("discussion");
console.log(document.body.innerHTML);