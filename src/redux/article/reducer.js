import {
  CREATE_ARTICLE_FULFILLED,
  CREATE_ARTICLE_PENDING,
  CREATE_ARTICLE_REJECTED,
  FIND_ARTICLE_PENDING,
  FIND_ARTICLE_FULFILLED,
  FIND_ARTICLE_REJECTED,
} from './action'

const articleReducer = (state = {}, { type, payload }) => {
  switch (type) {

    case CREATE_ARTICLE_FULFILLED:
    case FIND_ARTICLE_FULFILLED:
      return {
        ...state,
        loading: false,
        loaded: true,
        ...payload,
      }
    case CREATE_ARTICLE_PENDING:
    case FIND_ARTICLE_PENDING:
      return {
        ...state,
        loading: true,
      }

    case CREATE_ARTICLE_REJECTED:
    case FIND_ARTICLE_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      }

    default:
      return state
  }
}

export default articleReducer
