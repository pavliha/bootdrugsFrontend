import Keyword from 'services/api/Keyword'

export const FIND_KEYWORD = 'FIND_KEYWORD'
export const FIND_KEYWORD_PENDING = 'FIND_KEYWORD_PENDING'
export const FIND_KEYWORD_REJECTED = 'FIND_KEYWORD_REJECTED'
export const FIND_KEYWORD_FULFILLED = 'FIND_KEYWORD_FULFILLED'

export const SEARCH_KEYWORD = 'SEARCH_KEYWORD'
export const SEARCH_KEYWORD_PENDING = 'SEARCH_KEYWORD_PENDING'
export const SEARCH_KEYWORD_REJECTED = 'SEARCH_KEYWORD_REJECTED'
export const SEARCH_KEYWORD_FULFILLED = 'SEARCH_KEYWORD_FULFILLED'

const find = id => ({
  type: FIND_KEYWORD,
  payload: Keyword.find(id),
})

const search = selected => ({
  type: SEARCH_KEYWORD,
  payload: Keyword.search(selected),
})

export default { find, search }
