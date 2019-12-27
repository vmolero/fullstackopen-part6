import messageAction from '../actions/messageAction'

const initialState = { text: 'Welcome to the anecdote app', timeout: false }

const reducer = (state = initialState, action) => {
  state.timeoutId && clearTimeout(state.timeoutId)
  switch (action.type) {
    case messageAction.SHOW:
      return { text: action.text, timeoutId: action.timeoutId }
    case messageAction.HIDE:
      return { text: '', timeoutId: false }
    default:
      return initialState
  }
}

export default reducer
