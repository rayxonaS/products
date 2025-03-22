function Modal() {
  <div className="modal">
    <img src="./images/icon-order-confirmed.svg" alt="" />
    <h1>Order Confirmed</h1>
    <p>We hope you enjoy your food</p>
    <div>
      <div>
        <img src="./images/image-tiramisu-desktop.jpg" alt="" />
        <div>
          <h4>Classic Tiramisu</h4>
          <ul>
            <li>1x</li>
            <li>@ $5.50</li>
          </ul>
        </div>
        <p>$5.50</p>
      </div>

      <div>
        <img src="./images/image-creme-brulee-desktop.jpg" alt="" />
        <div>
          <h4>Vanilla Bean Crème Brûlée</h4>
          <ul>
            <li>4x</li>
            <li>@ $7.00</li>
          </ul>
        </div>
        <p>$28.00</p>
      </div>

      <div>
        <img src="./images/image-panna-cotta-desktop.jpg" alt="" />
        <div>
          <h4>Vanilla Panna Cotta</h4>
          <ul>
            <li>2x</li>
            <li>@ $6.50</li>
          </ul>
        </div>
        <p>$13.00</p>
      </div>
      <ul>
        <p>Order Total</p>
        <p>$46.50</p>
      </ul>
    </div>
    <button>Start New Order</button>
  </div>;
}

export default Modal;
