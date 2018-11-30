import Article from 'services/api/Article'

export const CREATE_ARTICLE = 'CREATE_ARTICLE'
export const CREATE_ARTICLE_PENDING = 'CREATE_ARTICLE_PENDING'
export const CREATE_ARTICLE_REJECTED = 'CREATE_ARTICLE_REJECTED'
export const CREATE_ARTICLE_FULFILLED = 'CREATE_ARTICLE_FULFILLED'

const create = form => ({
  type: CREATE_ARTICLE,
  payload: Article.create(form),
})

export default { create }
