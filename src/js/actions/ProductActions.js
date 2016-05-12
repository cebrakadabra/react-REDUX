
import dispatcher from "../dispatcher";

export function createProduct(text) {
  dispatcher.dispatch({
    type: "CREATE_PRODUCT",
    text,
  });
}

export function deleteProduct(id) {
  dispatcher.dispatch({
    type: "DELETE_PRODUCT",
    id,
  });
}

export function reloadProducts() {
  dispatcher.dispatch({type: "FETCH_PRODUCTS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_PRODUCTS", products: [
      {
        id: 8484848484,
        text: "TV Series One",
        live: false
      },
      {
        id: 6262627272,
        text: "TV Series Two",
        live: true
      },
    ]});

    if(false) {
      dispatcher.dispatch({type: "FETCH_PRODUCTS_ERROR"});
    }
  }, 1000);
}
