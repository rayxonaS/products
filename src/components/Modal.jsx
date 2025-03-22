function Modal({ d, setShowModal }) {
  return (
    <div className="modal">
      <img
        className="modal-image"
        src="./images/icon-order-confirmed.svg"
        alt=""
      />
      <h1 className="modal-text">Order Confirmed</h1>
      <p className="modal-content">We hope you enjoy your food</p>
      <div className="modal-list">
        <div className="modal-container">
          <img
            className="modal-image "
            src="./images/image-tiramisu-desktop.jpg"
            alt=""
          />
          <div>
            <h4 className="modal-category">Classic Tiramisu</h4>
            <ul className="list">
              <li className="amount">1x</li>
              <li className="modal-price">@ $5.50</li>
            </ul>
          </div>
          <p className="total-price">$5.50</p>
        </div>

        <div className="modal-container">
          <img
            className="modal-image"
            src="./images/image-creme-brulee-desktop.jpg"
            alt=""
          />
          <div>
            <h4 className="modal-category">Vanilla Bean Crème Brûlée</h4>
            <ul className="list">
              <li className="amount">4x</li>
              <li className="modal-price">@ $7.00</li>
            </ul>
          </div>
          <p className="total-price">$28.00</p>
        </div>

        <div className="modal-container">
          <img
            className="modal-image"
            src="./images/image-panna-cotta-desktop.jpg"
            alt=""
          />
          <div>
            <h4 className="modal-category">Vanilla Panna Cotta</h4>
            <ul className="list">
              <li className="amount">2x</li>
              <li className="modal-price">@ $6.50</li>
            </ul>
          </div>
          <p className="total-price">$13.00</p>
        </div>
        <ul className="order-list">
          <p className="order">Order Total</p>
          <p className="order-price">$46.50</p>
        </ul>
      </div>
      <button onClick={() => setShowModal(false)} className="modal-button">
        Start New Order
      </button>
    </div>
  );
}

export default Modal;
