import axios from 'axios'
import Cookies from 'js-cookie'

import { getCookieFromReq } from '../helpers/utils'

const axiosInstance = axios.create({
  baseURL:'http://localhost:3000/api/v1'
})

const setAuthHeader = (req) => {
  const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt')
  if (token) {
    return { headers: {'authorization': `Bearer ${token}`}} 
  }
  return undefined
}

const rejectPromise = (resError) => {
  let error = {}

  if(resError && resError.response && resError.response.data){
    error = resError.response.data
  } else {
    error = resError
  }

  return Promise.reject(error)
}

export const getSecretData = async (req) => {

  return await axiosInstance.get('/secret', setAuthHeader(req)).then(response => response.data)
}

export const getPortfolios = async() => {
  return await axiosInstance.get('/portfolios').then(response => response.data)
}

export const createPortfolio = async (portfolioData) => {
  return await axiosInstance.post('/portfolios', portfolioData, setAuthHeader())
    .then(response => response.data)
    .catch(error => rejectPromise(error))
}
