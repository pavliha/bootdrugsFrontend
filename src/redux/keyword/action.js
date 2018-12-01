import Trends from 'services/api/Trends'

export const FIND_KEYWORD = 'FIND_KEYWORD'
export const FIND_KEYWORD_PENDING = 'FIND_KEYWORD_PENDING'
export const FIND_KEYWORD_REJECTED = 'FIND_KEYWORD_REJECTED'
export const FIND_KEYWORD_FULFILLED = 'FIND_KEYWORD_FULFILLED'

const find = id => ({
  type: FIND_KEYWORD,
  payload: Trends.find(id),
})

export default { find }
