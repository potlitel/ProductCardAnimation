import { useEffect } from "react";
import "../App.css";

export default function Main() {
  useEffect(() => {
    const productCard = document.querySelector(".card");
    const backArrow = document.querySelector(".back-arrow");
    let card;

    productCard.addEventListener("click", (event) => {
      card = event.currentTarget;

      card.classList.add("selected");
    });

    backArrow.addEventListener("click", (event) => {
      event.stopPropagation();
      card.classList.remove("selected");
    });
  }, []);

  return (
    <div className="card">
      <div className="back-arrow">
        <i className="fa-solid fa-arrow-left-long"></i>
      </div>
      <h2 className="hide">Reception Chair</h2>
      <h3 className="hide">Black,Mahogany Wood</h3>
      <figure className="product-img-container">
        <img
          src="https://res.cloudinary.com/djix6uusx/image/upload/v1654945378/chair1_nzmrnl.png"
          alt="black mahogany wood reception chair"
          className="product-img"
        />
      </figure>
      <div className="product-price-count-container hide">
        <span>$280</span>
        <span className="plus-icon">
          <i className="fa-solid fa-plus"></i>
        </span>
      </div>
      <button className="add-to-cart-btn hide">Add to Card</button>

      <div className="side-card">
        <div className="product-details-container">
          <h2>Reception Chair</h2>
          <h3>Black,Mahogany Wood</h3>
          <p className="product-price">$280</p>
          <p className="product-detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            quam id, nemo similique laudantium eum, fuga voluptas aut est,
            voluptatum eligendi reiciendis beatae ab possimus. Sunt aliquid
            asperiores cumque. Autem!
          </p>
          <button className="add-to-cart-btn">Add to Card</button>
        </div>
        <div>
          <figure>
            <img
              src="https://res.cloudinary.com/djix6uusx/image/upload/v1654945377/chair4_yy3z5i.png"
              alt="black mahogany wood reception chair"
              className="product-img"
            />
          </figure>
          <figure>
            <img
              src="https://res.cloudinary.com/djix6uusx/image/upload/v1654945377/chair2_nowesk.png"
              alt="black mahogany wood reception chair"
              className="product-img"
            />
          </figure>
          <figure>
            <img
              src="https://res.cloudinary.com/djix6uusx/image/upload/v1654945378/chair1_nzmrnl.png"
              alt="black mahogany wood reception chair"
              className="product-img"
            />
          </figure>
          <figure>
            <img
              src="https://res.cloudinary.com/djix6uusx/image/upload/v1654945377/chair3_ggn5qy.png"
              alt="black mahogany wood reception chair"
              className="product-img"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
