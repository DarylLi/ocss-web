import axios from 'axios'
import store from 'store'
export function _axios (options, blocked = true) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      // headers: { 'authorization': 'bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaWhhb3RpYW4iLCJ1aWQiOjEyNCwiY3JlYXRlZCI6MTU1ODQ5NzMzMDA0OCwidGVuYW50SWQiOiJsaWhhb3RpYW4iLCJleHAiOjE1NTg3NTY1MzB9.maXDlVaDQi_KKbTnYrA_B1MCWh9utLnfzkqY-IwgbLTEocs8z1-LdSGDOpuv89lvIwHaOSlajLils0dZzRCd_A' },
      timeout: 20000 // 超时
    })
    if (blocked) {
      instance(options)
        .then(response => {
          const res = response.data
          resolve(res)
          store.commit('SET_PAGE_LOADED', true)
        })
        .catch(error => {
          store.commit('SET_PAGE_LOADED', true)
          reject(error)
        })
    }
  })
}
