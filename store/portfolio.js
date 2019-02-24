import to from 'await-to-js'

export const GET_PORTFOLIO_SUCCESS = 'GET_PORTFOLIO_SUCCESS'

export const state = () => ({
  portfolioItems: [],
  selectedItem: []
})

export const actions = {
  getPortfolioItems: async ({ commit }) => {
    const [err, response] = await to(this.$axios.$get('/v2/portfolio-api?_embed'));
    if (!err && response) {
      commit(GET_PORTFOLIO_SUCCESS, response.data)
    }
  }
}

export const mutations = {
  [GET_PORTFOLIO_SUCCESS]: (state, payload) => {
    state.portfolioItems = [...payload]
  }
}

export const getters = {}
