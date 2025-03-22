function Product({ d }) {
  return (
    <div>
      <div>
        <img
          className="product-image"
          src={d.image.thumbnail}
          alt={d.name}
          srcSet={`${d.image.desktop}`}
        />
        <h1 className="category">{d.category}</h1>
        <p className="name">{d.name}</p>
        <p className="price">${d.price}</p>
      </div>
    </div>
  );
}

export default Product;
