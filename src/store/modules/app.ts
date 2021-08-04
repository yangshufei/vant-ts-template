import { Module } from 'vuex'
import { IRootState } from '@/store/index'
export interface IAppState {
  baseURL: string
}

const state:IAppState = {
  baseURL: ''
}
const app: Module<IAppState, IRootState> = {
  namespaced: true,
  state,
  mutations: {
    SET_BASE_URL: (state, baseURL) => {
      state.baseURL = baseURL
    }
  },
  actions: {
    GetBaseURL ({ commit }) {
      return new Promise((resolve) => {
        commit('SET_BASE_URL', '/')
        resolve('')
      })
    }
  }
}

export default app
