getAll(products) {
  return products;
}

let productReducer = function(products = [], action) {
  switch(action.type) {

    case "CREATE_PRODUCT":
      return [{
        id: Date now(),
        text: action.text,
        live: false
      }, ...products]

    case "DELETE_PRODUCT":
      return products.filter((product) => {
        return product.id !== action.id
      })

      // TODO
    // case "RECEIVE_PRODUCTS": {
      // this.products = action.products;
      // this.emit("change");
      // break;
    // }

    default:
      return products

  }
};

export default productReducer;
