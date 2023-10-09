import { LitElement, html } from 'lit';

class ProductComponent extends LitElement {
  static properties = {
    product: {
      type: Object
    }
  }

  render() {
    return html`
      <div>
        <h1>Product component !..ss</h1>
        <span>${this.product.title}</span>
      </div>
    `;
  }
}

customElements.define('product-component', ProductComponent);