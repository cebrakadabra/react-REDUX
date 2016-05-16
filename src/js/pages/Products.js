import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Product from "../components/Product";
import actions from "../actions/ProductActions";
// import ProductStore from "../stores/ProductStore";


export default class Products extends React.Component {

  render() {

    const products = this.props.products;
    const ProductComponents = products.map((product) => {
        return <Product key={product.id} {...product}/>;
    });

    return (
      <div>
        <button onClick={this.props.actions.reloadProducts}>Reload products from fake server (timeout-func)</button>
        <h1>Products</h1>
        <ul>{ProductComponents}</ul>
        <br/>
        <button onClick={this.props.actions.createProduct}>Create random Product</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
