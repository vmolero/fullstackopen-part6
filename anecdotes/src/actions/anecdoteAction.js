const type = {
  VOTE: 'VOTE',
  NEW: 'NEW'
}

const voteAnecdoteAction = ({ id }) => {
  return {
    type: 'VOTE',
    anecdoteId: id
  }
}

const newAnecdoteAction = ({ content }) => {
  return {
    type: 'NEW',
    content
  }
}

export default type
export { voteAnecdoteAction, newAnecdoteAction }
