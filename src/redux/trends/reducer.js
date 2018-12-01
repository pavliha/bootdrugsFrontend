import {
  GET_TRENDS_FULFILLED,
  GET_TRENDS_PENDING,
  GET_TRENDS_REJECTED,
} from './action'

const trendsReducer = (state = {}, { type, payload }) => {
  switch (type) {

    case GET_TRENDS_FULFILLED:
      return {
        ...state,
        loading: false,
        loaded: true,
        ...payload,
      }

    case GET_TRENDS_PENDING:
      return {
        ...state,
        loading: true,
      }

    case GET_TRENDS_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      }

    default:
      return state
  }
}

export default trendsReducer
