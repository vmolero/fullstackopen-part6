// Find actions in this file
import actionType from '../actions/anecdoteAction'

const asObject = anecdote => {
  return Object.freeze({ ...anecdote })
}

const initialState = []

function createNewState(newAnecdote, restOfAnecdotes) {
  const newState = [...restOfAnecdotes, newAnecdote]
  sortByVotes(newState)
  return newState
}

function sortByVotes(anecdotes) {
  anecdotes.sort((anecdoteA, anecdoteB) =>
    parseInt(anecdoteA.votes) > parseInt(anecdoteB.votes) ? -1 : 1
  )
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.VOTE:
      const filteredState = state.filter(
        anecdote => anecdote.id !== action.anecdote.id
      )
      return createNewState(asObject(action.anecdote), filteredState)
    case actionType.NEW:
      const newAnecdote = asObject(action.anecdote)
      return createNewState(newAnecdote, state)
    case actionType.INIT:
      const allAnecdotes = action.anecdotes.map(asObject)
      sortByVotes(allAnecdotes)
      return allAnecdotes
    default:
      return state
  }
}

export default reducer
