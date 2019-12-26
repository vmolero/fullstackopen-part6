const initialState = Object.freeze({
  good: 0,
  ok: 0,
  bad: 0
})

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      return Object.freeze({ ...state, good: state.good + 1 })
    case 'OK':
      return Object.freeze({ ...state, ok: state.ok + 1 })
    case 'BAD':
      return Object.freeze({ ...state, bad: state.bad + 1 })
    case 'ZERO':
      return initialState
    default:
      return state
  }
}

export default counterReducer
