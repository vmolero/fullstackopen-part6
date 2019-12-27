const type = {
  VOTE: 'VOTE',
  NEW: 'NEW'
}

const voteAnecdoteAction = ({ id }) => {
  return {
    type: type.VOTE,
    anecdoteId: id
  }
}

const newAnecdoteAction = ({ content }) => {
  return {
    type: type.NEW,
    content
  }
}

export default type
export { voteAnecdoteAction, newAnecdoteAction }
