import Article from 'services/api/Article'

export const CREATE_ARTICLE = 'CREATE_ARTICLE'
export const CREATE_ARTICLE_PENDING = 'CREATE_ARTICLE_PENDING'
export const CREATE_ARTICLE_REJECTED = 'CREATE_ARTICLE_REJECTED'
export const CREATE_ARTICLE_FULFILLED = 'CREATE_ARTICLE_FULFILLED'

export const FIND_ARTICLE = 'FIND_ARTICLE'
export const FIND_ARTICLE_PENDING = 'FIND_ARTICLE_PENDING'
export const FIND_ARTICLE_REJECTED = 'FIND_ARTICLE_REJECTED'
export const FIND_ARTICLE_FULFILLED = 'FIND_ARTICLE_FULFILLED'

export const HIGHLIGHT_ARTICLE = 'HIGHLIGHT_ARTICLE'

const create = form => ({
  type: CREATE_ARTICLE,
  payload: Article.create(form),
})

const find = id => ({
  type: FIND_ARTICLE,
  payload: Article.find(id),
})

const highlight = title => ({
  type: HIGHLIGHT_ARTICLE,
  payload: title,
})

export default { create, find, highlight }
