export default {
  // SET_USER: (state, user) => {
  //   state.user = user
  // },
  SET_MAIL_PRODUCTS: (state, mailProducts) => {
    state.mailProducts = mailProducts
  },
  UPDATE_USER_COIN: (state, val) => {
    state.userinfo.data.activity_coin = val
  },
  REDUCE_USER_COIN: (state, val) => {
    state.userinfo.data.activity_coin -= val
  },
  SET_USER_INFO_RELOAD: (state, val) => {
    state.isReloadUserInfo = val
  }
}
