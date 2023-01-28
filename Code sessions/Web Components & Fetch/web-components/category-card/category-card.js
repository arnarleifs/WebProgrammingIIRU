class CategoryCard extends HTMLElement {
  get imageUrl() {
    return this.getAttribute("image-url");
  }

  constructor() {
    super();
    let template = document.getElementById("category-card-template");
    let templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(templateContent.cloneNode(true));

    const categoryImage = shadowRoot.querySelector(".category-image");
    categoryImage.style.backgroundImage = `url(${this.imageUrl})`;
  }
}

customElements.define("category-card", CategoryCard);
