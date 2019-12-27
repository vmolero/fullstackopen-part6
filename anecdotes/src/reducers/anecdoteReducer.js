// Find actions in this file
import actionType from '../actions/anecdoteAction'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = anecdote => {
  return Object.freeze({
    content: anecdote,
    id: getId(),
    votes: 0
  })
}

const initialState = anecdotesAtStart.map(asObject)

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
  console.log('state now: ', state)
  console.log('action', action)

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
    default:
      return state
  }
}

export default reducer
