import { LitElement, html, css } from 'lit';

class ProductComponent extends LitElement {
  static styles = css`
    /* Add your CSS styles here */
  `;

  render() {
    return html`
      <div>
        <h1>Product component !!!</h1>
      </div>
    `;
  }
}

customElements.define('product-component', ProductComponent);