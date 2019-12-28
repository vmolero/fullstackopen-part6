import anecdoteService from '../services/anecdoteService'

const type = {
  VOTE: 'VOTE',
  NEW: 'NEW',
  INIT: 'INIT'
}

const voteAnecdoteAction = ({ id }) => {
  return {
    type: type.VOTE,
    anecdoteId: id
  }
}

const newAnecdoteAction = ({ anecdote }) => {
  return {
    type: type.NEW,
    anecdote
  }
}

const initializeAnecdotesAction = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
    type: type.INIT,
    anecdotes
    })
  }
}

export default type
export { voteAnecdoteAction, newAnecdoteAction, initializeAnecdotesAction }
