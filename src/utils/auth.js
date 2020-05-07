import { cookie } from 'vux'

/**
 * 用户登录后cookie会存有以下几个字段
 * ecmsmlauth
 * ecmsmlgroupid
 * ecmsmlrnd
 * ecmsmluserid
 * ecmsmlusername
 */

// export function isLoginFromCookie (){
//     return cookie.get('ecmsmlauth') && cookie.get('ecmsmlgroupid') && cookie.get('ecmsmlrnd') && cookie.get('ecmsmluserid') && cookie.get('ecmsmlusername')
// }

const TokenKey = 'tiku_token'

export function getToken() {
  return cookie.get(TokenKey)
}

export function setToken(token) {
  return cookie.set(TokenKey, token)
}

export function removeToken() {
  return cookie.remove(TokenKey)
}


