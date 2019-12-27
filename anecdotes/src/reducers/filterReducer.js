import filterAction from '../actions/filterAction'

const initialState = ''

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case filterAction.APPLY:
      return action.filter
    case filterAction.CANCEL:
      return initialState
    default:
      return state
  }
}

export default reducer
