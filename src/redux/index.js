import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import layoutReducer from './layout/reducer'
import headerReducer from './header/reducer'
import articleReducer from './article/reducer'
import trendsReducer from './trends/reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['articleReducer'],
}

const reducers = combineReducers({
  articleReducer,
  trendsReducer,
  layoutReducer,
  headerReducer,
})

export default persistReducer(persistConfig, reducers)
