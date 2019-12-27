import React from 'react'

const Anecdote = ({ id, content, votes, voteHandler }) => {
  return (
    <div key={id}>
      <div>{content}</div>
      <div>
        has {votes}
        <button onClick={voteHandler}>vote</button>
      </div>
    </div>
  )
}

export default Anecdote
