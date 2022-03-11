const state = {
  items: [],
}

const mutations = {
  //添加商品到购物车
  pushProductToCart(state, { id, imgUrl, title, price, quantity }) {
    if (!quantity) {
      quantity = 1
    }
    state.items.push({ id, imgUrl, title, price, quantity })
  },
  //添加商品数量
  incrementItemQuantity(state, { id, quantity }) {
    let cartItem = state.items.find((item) => item.id == id)
    cartItem.quantity += quantity
  },
  setCartItems(state, { items }) {
    state.items = items
  },
  //删除购物车中的商品
  deleteCartItem(state, id) {
    let index = state.items.findIndex((item) => item.id == id)
    if (index > -1) {
      state.items.splice(index, 1)
    }
  },
}

const getters = {
  cartTotalPrice: (state) => {
    return state.items.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  },
  cartItemPrice: (state) => (id) => {
    if (state.items.length > 0) {
      const cartItem = state.items.find((item) => item.id == id)
      if (cartItem) {
        return cartItem.price * cartItem.quantity
      }
    }
  },
  itemsCount: (state) => {
    return state.items.length
  },
}

const actions = {
    addProductToCart({state,commit},{id,imgUrl,title,price,inventory,quantity}){
        if(inventory > 0){
            const cartItem = state.items.find(item => item.id ===id);
            if(!cartItem){
                commit('pushProductToCart',{id,imgUrl,title,price,quantity})
            }
            else{
                commit('incrementItemQuantity',{id,quantity})
            }
        }
    }
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}