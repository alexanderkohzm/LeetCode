// React is loaded and is available as React and ReactDOM
// imports should NOT be used
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPhoneNumber: false };
  }

  handleClick = () => {
    this.setState({ showPhoneNumber: true });
  };
  render() {
    return (
      <React.Fragment>
        <a onClick={this.handleClick} href="#">
          Want to buy a new car?
        </a>
        {this.state.showPhoneNumber && <p>Call +11 22 33 44 now!</p>}
      </React.Fragment>
    );
  }
}

document.body.innerHTML = "<div id='root'></div>";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Message />);
const rootElement = document.getElementById("root");
setTimeout(() => {
  console.log("Before click: " + rootElement.innerHTML);

  document.querySelector("a").click();
  setTimeout(() => {
    console.log("After click: " + rootElement.innerHTML);
  });
});