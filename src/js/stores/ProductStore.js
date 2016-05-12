import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class ProductStore extends EventEmitter {
  constructor() {
    super()
    this.products = [
      {
        id: 113464613,
        text: "TV Series One from Store",
        live: false
      },
      {
        id: 235684679,
        text: "TV Series Two from Store",
        live: false
      },
    ];
  }

  createProduct(text) {
    const id = Date.now();

    this.products.push({
      id,
      text,
      live: false,
    });

    this.emit("change");
  }

  getAll() {
    return this.products;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_PRODUCT": {
        this.createProduct(action.text);
        break;
      }
      case "RECEIVE_PRODUCTS": {
        this.products = action.products;
        this.emit("change");
        break;
      }
    }
  }

}

const productStore = new ProductStore;

dispatcher.register(productStore.handleActions.bind(productStore));

export default productStore;
