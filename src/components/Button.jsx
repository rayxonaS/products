function Button({ d, setClicked }) {
  return (
    <div onClick={() => setClicked(false)} className="button-container">
      <img className="button-image-minus" src="./images/minus.svg" alt="" />
      <p className="button-text">4</p>
      <img className="button-image-plus" src="./images/plus.svg" alt="" />
    </div>
  );
}

export default Button;
