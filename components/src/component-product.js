import { LitElement, html } from 'lit';

class ProductComponent extends LitElement {
  static properties = {
    currentVariant: {
      type: Object
    },
    product: {
      type: Object
    }
  }

  render() {
    console.log(this.product, 'this.currentVariant')
    return html`
      <div class="flex w-full">
        <div class="grid flex-grow card place-items-center overflow-hidden">

          <div class="carousel w-[400px]">ss
            ${this.product.media.map(({ src, alt }, idx) => {
              return html`
              <div id="item${idx}" class="carousel-item w-full">
                <div class="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img src='${src}' alt='${alt}'/>
                  </figure>
                </div>
              </div>
            `;
            })}
          </div>
          <div class="flex justify-center w-full py-2 gap-2 mt-5">
            ${this.product.media.map(({ src, alt }, idx) => {
              return html`
              <div class="avatar">
                <a href="#item${idx}" class="w-20 rounded">
                  <img src="${src}" alt="${alt}">
                </a>
              </div>
            `;
            })}
          </div>


        </div>
      </div>
    `;
  }
}

customElements.define('product-component', ProductComponent);