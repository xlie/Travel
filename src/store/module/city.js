export const city = {
  namespaced: true,
  state: {
    city: '武汉'
  },
  mutations: {
    changeCity(state,city) {
      state.city = city
    }
  }
}
