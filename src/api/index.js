import Axios from 'axios'

const timeout = 10000 // 10秒超时
const axios = Axios.create({timeout})

// 封装GET请求
function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: params})
      .then((resp) => {
        if (+resp.data.code === 0) resolve(resp.data.data)
        else if (+resp.data.code === 10001) window.location = resp.data.data.referer
        else reject(resp.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// 封装POST请求
function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then((resp) => {
        if (+resp.data.code === 0) resolve(resp.data.data)
        else if (+resp.data.code === 10001) window.location = resp.data.data.referer
        else reject(resp.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// 请求汇总

// 获取我的奖品
export function myPrize () {
  const url = '/activity/worldCup/getMyPrize'
  return get(url)
}

// test
export function testPost (params) {
  const url = '/activity/worldCup/test'
  return post(url, params)
}
