import messageAction from '../actions/messageAction'

const initialState = { text: 'Welcome to the anecdote app', timeout: false }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case messageAction.SHOW:
      state.timeoutId && clearTimeout(state.timeoutId)
      return { text: action.text, timeoutId: action.timeoutId }
    case messageAction.HIDE:
      return { text: '', timeoutId: false }
    default:
      return state
  }
}

export default reducer
