import { combineReducers } from 'redux'
import * as Reducers from './Reducers'
import * as tyoes from '../actions/types'
import initialState from './initialstate.json'

const appReducer = combineReducers(Object.assign(
  Reducers
));

const rootReducer = (state, action) =>{
  return appReducer(state, action)
}

export default rootReducer;
