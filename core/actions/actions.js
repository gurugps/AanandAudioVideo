import * as types from './types'
import initialState from '../reducers/initialstate'

export function set_sources(){
  return{
    type: types.SOURCE_OBJ,
    payload: sources
  }
}
