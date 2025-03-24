import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

function Product({ d }) {
  const [showModal, setShowModal] = useState(false);
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      {showModal && <Modal setShowModal={setShowModal} d={d} />}
      <div>
        <img
          onClick={() => setShowModal(true)}
          className="product-image"
          src={d.image.thumbnail}
          alt={d.name}
          srcSet={`${d.image.desktop}`}
        />
        <div className="cart-button">
          {!clicked ? (
            <button onClick={() => setClicked(true)} className="button">
              <img
                className="cart-image"
                src="./images/icon-add-to-cart.svg"
                alt=""
              />
              <p className="cart-text">Add to Cart</p>
            </button>
          ) : (
            <Button setClicked={setClicked} />
          )}
        </div>
        <h1 className="category">{d.category}</h1>
        <p className="name">{d.name}</p>
        <p className="price">${d.price}</p>
      </div>
    </div>
  );
}

export default Product;
