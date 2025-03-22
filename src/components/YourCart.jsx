function YourCart() {
  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart (0)</h1>
      <div className="section">
        <img src="./images/illustration-empty-cart.svg" alt="" />
        <p className="cart-content">Your added items will appear here</p>
      </div>
    </div>
  );
}

export default YourCart;
