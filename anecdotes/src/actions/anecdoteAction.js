import anecdoteService from '../services/anecdoteService'

const type = {
  VOTE: 'VOTE',
  NEW: 'NEW',
  INIT: 'INIT'
}

const voteAnecdoteAction = anecdote => {
  return async dispatch => {
    const anecdoteToUpdate = { ...anecdote, votes: anecdote.votes + 1 }
    const updatedAnecdote = await anecdoteService.update(anecdoteToUpdate)
    dispatch({
      type: type.VOTE,
      anecdote: updatedAnecdote
    })
  }
}

const newAnecdoteAction = anecdote => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(anecdote)
    dispatch({
      type: type.NEW,
      anecdote: newAnecdote
    })
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
