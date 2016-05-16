let actions = {
  createProduct: function(text) {
    return {
      type: "CREATE_PRODUCT",
      text: "New Product in the list, random no.: " + Date.now()
    };
  },

  deleteProduct: function(id) {
    return {
      type: "DELETE_PRODUCT",
      id: id
    };
  },

  reloadProductsAsync: function(products){
    return {
      type: "RECEIVE_PRODUCTS",
      products: products
    };
  },

  reloadProducts: function() {

    const products = [
      {
        id: 8484848484,
        text: "TV Series One",
        live: false
      },
      {
        id: 6262627272,
        text: "TV Series Two",
        live: true
      }
    ];

    return (dispatch) => {
      setTimeout(() => {
        dispatch(actions.reloadProductsAsync(products));
      }, 2000);
    };

  },
};

export default actions;
