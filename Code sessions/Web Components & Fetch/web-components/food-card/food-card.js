class FoodCard extends HTMLElement {
  get imageUrl() {
    return this.getAttribute("image-url");
  }

  constructor() {
    super();
    let template = document.getElementById("food-card-template");
    let templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(templateContent.cloneNode(true));

    const foodImage = shadowRoot.querySelector(".food-image");
    foodImage.style.backgroundImage = `url(${this.imageUrl})`;
  }
}

customElements.define("food-card", FoodCard);
