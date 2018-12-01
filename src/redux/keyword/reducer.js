import { FIND_KEYWORD_FULFILLED, FIND_KEYWORD_PENDING, FIND_KEYWORD_REJECTED } from './action'

const keywordReducer = (state = {}, { type, payload }) => {
  switch (type) {

    case FIND_KEYWORD_FULFILLED:
      return {
        ...state,
        loading: false,
        loaded: true,
        ...payload,
      }

    case FIND_KEYWORD_PENDING:
      return {
        ...state,
        loading: true,
      }

    case FIND_KEYWORD_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      }

    default:
      return state
  }
}

export default keywordReducer
