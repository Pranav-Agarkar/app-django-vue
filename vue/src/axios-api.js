import axios from 'axios'

const getAPI = axios.create({
  baseURL: 'PranavAgarkar.pythonanywhere.com',
  timeout: 1000,
})

export {getAPI}
