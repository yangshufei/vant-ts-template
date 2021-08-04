import { Module } from 'vuex'
import { IRootState } from '@/store/index'
export interface IUserState {
  userInfo: Record<string, string|number>
  isAuth: boolean
  code: string
}

const state:IUserState = {
  userInfo: {},
  isAuth: false,
  code: ''
}
const user: Module<IUserState, IRootState> = {
  namespaced: true,
  state,
  mutations: {
    SET_USER_INFO: (state, data) => {
      state.userInfo = data
    },
    SET_ISAUTH: (state, data) => {
      state.isAuth = data
    },
    SET_CODE: (state, data) => {
      state.code = data
    }
  },
  actions: {
    GetUserInfo ({ commit }) {
      return new Promise((resolve) => {
        commit('SET_USER_INFO', { name: 'ysf', age: 18 })
        commit('SET_ISAUTH', true)
        resolve('')
      })
    },
    async GetCode ({ commit }, data) {
      return commit('STE_CODE', data)
    }
  }
}

export default user
