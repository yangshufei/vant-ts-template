import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
import user, { IUserState } from './modules/user'
import app, { IAppState } from './modules/app'
import getters from './getters'

export interface IRootState {
  user: IUserState,
  app: IAppState
}
export const key: InjectionKey<Store<IRootState>> = Symbol()

export const store = createStore<IRootState>({
  modules: {
    user,
    app
  },
  getters
})

export function useStore () {
  return baseUseStore(key)
}
