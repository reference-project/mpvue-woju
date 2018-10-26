export const mutations = {
  SET_MY_SHOP: (state, v) => {
    state.myShops = v;
  },
  SET_MY_ORDER: (state, v) => {
    state.myOrders = v;
  },

  USER_INFO: (state, v) => {
    console.log("SET USERINFO TO", v)
    wx.setStorageSync("userInfo", v);
    state.userInfo = v
  },
  SET_ITEM: (state, v) => {
    console.log("SET_ITEM to" + v);
    state.currentItem = v
  },
  PARTNER: (state, v) => {
    state.partner_list = v
  },
  SET_SELECT_PARTNER: (state, v) => {
    console.log("SET my_partner To", v)
    wx.setStorageSync("SET_SELECT_PARTNER", v);
    state.my_partner = v;
  },
  SET_BUYITEMLIST: (state, v) => {
    if (v && v.length > 0) {
      v.forEach(element => {
        element.Count = 0;
      });
      state.buyItems = v;
      wx.setStorageSync("SET_BUYITEMLIST", v);
    }
  },
  SET_OPENID: (state, v) => {
    console.log("SET_OPENID To", v)
    wx.setStorageSync("openid", v);
    state.openid = v;
  },
  SET_POSITION: (state, v) => {
    console.log("SET_POSITION To", v)
    state.position = Object.assign({}, state.position, v);
    wx.setStorageSync("SET_POSITION", state.position);
  },
  ADD_TO_CART: (state, v) => {
    //v.Count += 1;
    // state.cartItems = [...state.cartItems.filter(z => z.Partner_Id != state.my_partner.Id), ...state.buyItems.filter(z => z.Count > 0 && z.Partner_Id == state.my_partner.Id)]
    state.cartItems = [...state.buyItems.filter(z => z.Count > 0 && z.Partner_Id == state.my_partner.Id)]
    state.total = state.cartItems.reduce((c, n) => c + n.Count, 0)
    state.totalPrice = state.cartItems.reduce((c, n) => c + (n.BuyItem.Price * n.Count), 0)
    state.totalVipPrice = state.cartItems.reduce((c, n) => c + (n.BuyItem.VipPrice * n.Count), 0)
    console.log(state.cartItems, state.total, state.totalPrice, state.totalVipPrice)
  }
}
export default
mutations
;
