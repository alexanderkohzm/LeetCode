// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const Product = (props) => {
  const { onVote, name, votes } = props;

  const plus = () => {
    // Call props.onVote to increase the vote count for this product
    onVote(name, 1);
  };
  const minus = () => {
    onVote(name, -1);
  };
  return (
    <li>
      <span>{name}</span> - <span>votes: {votes}</span>
      <button onClick={plus}>+</button> <button onClick={minus}>-</button>
    </li>
  );
};

const GroceryApp = (props) => {
  let [products, setProducts] = React.useState(props.products);
  const onVote = (dir, index) => {
    const productList = [...products];

    productList.map((product) => {
      if (product.name === dir) return (product.votes += index);
      return product;
    });

    setProducts(productList);
  };

  return (
    <ul>
      {/* Render an array of products, which should call onVote when + or - is clicked */}
      {products.map((product) => {
        const { name, votes } = product;
        return (
          <Product key={`${name}`} onVote={onVote} name={name} votes={votes} />
        );
      })}
    </ul>
  );
};

document.body.innerHTML = "<div id='root'></div>";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GroceryApp
    products={[
      { name: "Oranges", votes: 0 },
      { name: "Bananas", votes: 0 },
    ]}
  />
);

setTimeout(() => {
  let plusButton = document.querySelector("ul > li > button");
  if (plusButton) {
    plusButton.click();
  }
  setTimeout(() => {
    console.log(document.getElementById("root").outerHTML);
  });
});
