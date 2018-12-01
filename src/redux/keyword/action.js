import Keyword from 'services/api/Keyword'

export const FIND_KEYWORD = 'FIND_KEYWORD'
export const FIND_KEYWORD_PENDING = 'FIND_KEYWORD_PENDING'
export const FIND_KEYWORD_REJECTED = 'FIND_KEYWORD_REJECTED'
export const FIND_KEYWORD_FULFILLED = 'FIND_KEYWORD_FULFILLED'

const find = id => ({
  type: FIND_KEYWORD,
  payload: Keyword.find(id),
})

export default { find }
