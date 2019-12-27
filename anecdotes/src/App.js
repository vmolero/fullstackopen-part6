import React from 'react'
import AnecdoteList from './components/AnecdoteList'
import { voteAction } from './actions/anecdoteAction'

const App = ({ store }) => {
  const anecdotes = store.getState()

  const vote = id => () => {
    return store.dispatch(voteAction({ id }))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList anecdotes={anecdotes} voteHandler={vote} />
      <h2>create new</h2>
      <form>
        <div>
          <input />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App
