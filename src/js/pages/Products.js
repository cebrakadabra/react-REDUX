import React from "react";

import Product from "../components/Product";
import * as ProductActions from "../actions/ProductActions";
import ProductStore from "../stores/ProductStore";


export default class Products extends React.Component {
  constructor() {
    super();
    this.getProducts = this.getProducts.bind(this);
    this.state = {
      products: ProductStore.getAll(),
    };
  }

  componentWillMount() {
    ProductStore.on("change", this.getProducts);
  }

  componentWillUnmount() {
    ProductStore.removeListener("change", this.getProducts);
  }

  getProducts() {
    this.setState({
      products: ProductStore.getAll(),
    });
  }

  reloadProducts() {
    ProductActions.reloadProducts();
  }

  createProduct() {
    const text = "TV Series with id: " + Date.now() + "";
    ProductActions.createProduct(text);
  }

  render() {
    const { products } = this.state;

    const ProductComponents = products.map((product) => {
        return <Product key={product.id} {...product}/>;
    });

    return (
      <div>
        <button onClick={this.reloadProducts.bind(this)}>Reload products from fake server (timeout-func)</button>
        <h1>Products</h1>
        <ul>{ProductComponents}</ul>
        <br/>
        <button onClick={this.createProduct.bind(this)}>Create random Product</button>
      </div>
    );
  }
}
