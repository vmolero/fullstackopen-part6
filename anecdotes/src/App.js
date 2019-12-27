import React from 'react'
import AnecdoteList from './components/AnecdoteList'
import { voteAnecdoteAction, newAnecdoteAction } from './actions/anecdoteAction'
import AnecdoteForm from './components/AnecdoteForm'

const App = ({ store }) => {
  const anecdotes = store.getState()

  const vote = id => () => {
    return store.dispatch(voteAnecdoteAction({ id }))
  }

  const newHandler = ({ content }) => {
    return store.dispatch(newAnecdoteAction({ content }))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList anecdotes={anecdotes} voteHandler={vote} />
      <h2>create new</h2>
      <AnecdoteForm newHandler={newHandler} />
    </div>
  )
}

export default App
