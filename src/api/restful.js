import { _axios } from './axios'
// import io from 'socket.io-client'
import qs from 'qs'

export function actionPostFormData (url, data) {
  return _axios({
    url,
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  })
}
export function actionPostJsonData (url, data) {
  return _axios({
    url,
    method: 'post',
    cache: false,
    processData: false,
    contentType: false,
    headers: {
      'Content-Type': 'application/json'
    },
    onUploadProgress: (progressEvent) => {
      var complete = (progressEvent.loaded / progressEvent.total * 100 | 0) + '%'
      // let progress = complete
      console.log(complete)
    },
    data: data
  })
}

export function actionPostForm (url, data, blocked = true) {
  return _axios({
    url,
    method: 'post',
    data: data
  }, blocked)
}
export function actionPostJson (url, data, blocked = true) {
  return _axios({
    // url: '/falcon/user/login.html',
    url,
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  }, blocked)
}
export function actionPostSingle (url, data) {
  return _axios({
    url,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    contentType: 'application/x-www-form-urlencoded',
    data: data
  })
}
export function actionGet (url, data) {
  return _axios({
    url,
    method: 'get',
    params: data
  })
}
export function actionPut (url, data) {
  return _axios({
    url,
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  })
}
export function actionPostUrl (url, ccid) {
  return _axios({
    url,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    contentType: 'application/x-www-form-urlencoded',
    data: qs.stringify({
      'conversion_source': 'uri'
    })
  })
}

export function actionDelete (url, data) {
  return _axios({
    url,
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  })
}
