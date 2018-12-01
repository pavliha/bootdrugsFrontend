import Trends from 'services/api/Trends'

export const GET_TRENDS = 'GET_TRENDS'
export const GET_TRENDS_PENDING = 'GET_TRENDS_PENDING'
export const GET_TRENDS_REJECTED = 'GET_TRENDS_REJECTED'
export const GET_TRENDS_FULFILLED = 'GET_TRENDS_FULFILLED'

const all = () => ({
  type: GET_TRENDS,
  payload: Trends.all(),
})


export default { all }
