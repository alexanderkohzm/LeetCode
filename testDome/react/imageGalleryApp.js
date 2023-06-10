// React is loaded and is available as React and ReactDOM
// imports should NOT be used

// IMPORTANT -> need to use a lambda for onClick. If you don't you automatically call the removeButtonClick function
class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.links,
    };
  }

  onRemoveButtonClick = (imageToBeRemoved) => {
    const imagesLeft = this.state.images.filter(
      (image) => image !== imageToBeRemoved
    );
    this.setState({ images: imagesLeft });
  };

  render() {
    return (
      <div>
        {this.state.images.map((image) => {
          return (
            <div class="image">
              <img src={image}></img>
              <button
                onClick={() => this.onRemoveButtonClick(image)}
                class="remove"
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
const links = ["https://bit.ly/3lmYVna", "https://bit.ly/3flyaMj"];
const root = ReactDOM.createRoot(rootElement);
root.render(<ImageGallery links={links} />);

setTimeout(() => {
  document.querySelectorAll(".remove")[0]?.click();
  setTimeout(() => {
    console.log(rootElement?.innerHTML);
  });
});
