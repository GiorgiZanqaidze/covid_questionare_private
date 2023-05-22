import { covidApi } from '../config/axios/axiosInstances'

export default async function postCovidData(data) {
  try {
    console.log(data)
    await covidApi.post('create', data)
  } catch (error) {
    console.log(error)
  }
}
