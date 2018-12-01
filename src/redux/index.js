import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import layoutReducer from './layout/reducer'
import headerReducer from './header/reducer'
import articleReducer from './article/reducer'
import trendsReducer from './trends/reducer'
import keywordReducer from './keyword/reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['headerReducer'],
}

const reducers = combineReducers({
  articleReducer,
  trendsReducer,
  keywordReducer,
  layoutReducer,
  headerReducer,
})

export default persistReducer(persistConfig, reducers)
