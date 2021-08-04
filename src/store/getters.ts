import { IRootState } from '@/store/index'

const getters = {
  userInfo: (state: IRootState) => state.user.userInfo,
  baseURL: (state: IRootState) => state.app.baseURL
}
export default getters
