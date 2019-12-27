import React, { useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initializeAnecdotesAction } from './actions/anecdoteAction'
import { useResource } from './hooks/index'

const App = ({ initializeAnecdotesAction }) => {
  const [anecdotes, anecdoteService] = useResource(
    'http://localhost:3001/anecdotes'
  )

  const stableAnecdoteService = useCallback(anecdoteService, [])

  useEffect(() => {
    initializeAnecdotesAction({ anecdotes })
  }, [anecdotes, initializeAnecdotesAction])

  useEffect(() => {
    stableAnecdoteService.getAll()
  }, [stableAnecdoteService])

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
