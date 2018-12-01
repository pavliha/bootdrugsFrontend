import Trends from 'services/api/Trends'

export const GET_TRENDS = 'GET_TRENDS'
export const GET_TRENDS_PENDING = 'GET_TRENDS_PENDING'
export const GET_TRENDS_REJECTED = 'GET_TRENDS_REJECTED'
export const GET_TRENDS_FULFILLED = 'GET_TRENDS_FULFILLED'

export const FIND_TRENDS = 'FIND_TRENDS'
export const FIND_TRENDS_PENDING = 'FIND_TRENDS_PENDING'
export const FIND_TRENDS_REJECTED = 'FIND_TRENDS_REJECTED'
export const FIND_TRENDS_FULFILLED = 'FIND_TRENDS_FULFILLED'

const all = () => ({
  type: GET_TRENDS,
  payload: Trends.all(),
})

const find = id => ({
  type: FIND_TRENDS,
  payload: Trends.find(id),
})

export default { all, find }
