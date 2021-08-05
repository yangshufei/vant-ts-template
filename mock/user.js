/* eslint-disable */
module.exports = [
  // user login
  {
    url: 'user/login',
    type: 'post',
    response: () => {
      return {
        code: 1,
        data: 'jishidhsfifenkefnjenfj',
        msg: '登录成功'
      }
    }
  },

  // get user info
  {
    url: '/user/info.*',
    type: 'post',
    response: () => {
      const info = {
        introduction: 'I am an editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor'
      }
      return {
        code: 1,
        data: info,
        msg: 'success'
      }
    }
  },

  // user logout
  {
    url: '/user/logout',
    type: 'post',
    response: () => {
      return {
        code: 1,
        data: 'success'
      }
    }
  }
]
