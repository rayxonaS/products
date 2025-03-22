import { useState } from "react";
import Modal from "./Modal";
import Add from "./Add";

function Product({ d }) {
  const [showModal, setShowModal] = useState(false);
  const [change, setChange] = useState(false);
  return (
    <div>
      {showModal && <Modal setShowModal={setShowModal} d={d} />}
      {change && <Add setChange={setChange} d={d} />}
      <div>
        <img
          onClick={() => setShowModal(true)}
          className="product-image"
          src={d.image.thumbnail}
          alt={d.name}
          srcSet={`${d.image.desktop}`}
        />
        <div className="cart-button">
          <button onChange={() => setChange(true)} className="button">
            <img
              className="cart-image "
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
