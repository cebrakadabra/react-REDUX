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

  reloadProducts: function() {
    // TODO
  },
};

export default actions;



// TODO refactor reloadProducts function

// export function reloadProducts() {
//   dispatcher.dispatch({type: "FETCH_PRODUCTS"});
//   setTimeout(() => {
//     dispatcher.dispatch({type: "RECEIVE_PRODUCTS", products: [
//       {
//         id: 8484848484,
//         text: "TV Series One",
//         live: false
//       },
//       {
//         id: 6262627272,
//         text: "TV Series Two",
//         live: true
//       },
//     ]});
//
//     if(false) {
//       dispatcher.dispatch({type: "FETCH_PRODUCTS_ERROR"});
//     }
//   }, 1000);
// }
