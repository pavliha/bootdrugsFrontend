import {
  ALL_ARTICLE_FULFILLED,
  ALL_ARTICLE_PENDING,
  ALL_ARTICLE_REJECTED,
} from './action'

const articleAllReducer = (state = {}, { type, payload }) => {
  switch (type) {

    case ALL_ARTICLE_FULFILLED:
      return {
        ...state,
        loading: false,
        loaded: true,
        ...payload,
      }

    case ALL_ARTICLE_PENDING:
      return {
        ...state,
        loading: true,
        loaded: false,
      }

    case ALL_ARTICLE_REJECTED:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: true,
      }

    default:
      return state
  }
}

export default articleAllReducer
