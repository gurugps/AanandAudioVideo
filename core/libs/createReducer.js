export default function createReducer(initialstate, handlers){
  return function reducer(state = initialstate, action){
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
