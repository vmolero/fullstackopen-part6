import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initializeAnecdotesAction } from './actions/anecdoteAction'

const App = ({ initializeAnecdotesAction }) => {
  useEffect(() => {
    initializeAnecdotesAction()
  }, [initializeAnecdotesAction])

  return (
    <div>
      <h1>Anecdotes (Redux version)</h1>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default connect(null, { initializeAnecdotesAction })(App)
