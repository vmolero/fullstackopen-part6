const type = {
  VOTE: 'VOTE'
}

const voteAction = ({ id }) => {
  return {
    type: 'VOTE',
    anecdoteId: id
  }
}

export default type
export { voteAction }
