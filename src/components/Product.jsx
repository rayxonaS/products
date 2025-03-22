function Product({ d }) {
  return (
    <div className="product-grid">
      <div>
        <img
          className="product-image"
          src={d.image.thumbnail}
          alt={d.name}
          srcSet={`${d.image.desktop}`}
        />
        <div className="cart-button">
          <button className="button">
            <img
              className="cart-image"
              src="./images/icon-add-to-cart.svg"
              alt=""
            />
            Add to Cart
          </button>
        </div>
        <h1 className="category">{d.category}</h1>
        <p className="name">{d.name}</p>
        <p className="price">${d.price}</p>
      </div>
    </div>
  );
}

export default Product;
