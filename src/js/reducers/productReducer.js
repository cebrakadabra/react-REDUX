function getAll(products) {
  return products;
}

let productReducer = function(products = [], action) {
  switch(action.type) {

    case "CREATE_PRODUCT":
      return [{
        id: Date.now(),
        text: action.text,
        live: false
      }, ...products];

    case "DELETE_PRODUCT":
      return products.filter((product) => {
        return product.id !== action.id;
      });

    case "RECEIVE_PRODUCTS":
      products = action.products;
      return products;

    default:
      return products;

  }
};

export default productReducer;
