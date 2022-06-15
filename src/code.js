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