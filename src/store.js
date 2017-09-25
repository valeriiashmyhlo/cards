import { createStore, applyMiddleware, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import reducer from './reducers/card'

const rootReducer = combineReducers({
  app: reducer,
  form: formReducer
})

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
)
