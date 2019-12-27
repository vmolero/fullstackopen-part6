// Find actions in this file
import actionType from '../actions/anecdoteAction'

const asObject = anecdote => {
  return Object.freeze({ ...anecdote })
}

const initialState = []

function findByIdAndFilterState(anecdoteId, state) {
  const anecdoteToUpvote = state.find(anecdote => anecdote.id === anecdoteId)
  const filteredState = state.filter(anecdote => anecdote.id !== anecdoteId)

  return [anecdoteToUpvote, filteredState]
}

function upvoteAnecdote(anecdote) {
  const updatedVotes = anecdote.votes + 1
  return Object.freeze({
    ...anecdote,
    votes: updatedVotes
  })
}

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
      const [anecdoteToUpvote, filteredState] = findByIdAndFilterState(
        action.anecdoteId,
        state
      )
      const upvotedAnecdote = upvoteAnecdote(anecdoteToUpvote)
      return createNewState(upvotedAnecdote, filteredState)
    case actionType.NEW:
      const newAnecdote = asObject(action.content)
      return createNewState(newAnecdote, state)
    case actionType.INIT:
      return action.anecdotes.map(asObject)
    default:
      return state
  }
}

export default reducer
