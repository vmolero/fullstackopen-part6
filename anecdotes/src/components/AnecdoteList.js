import React from 'react'
import { connect } from 'react-redux'
import Anecdote from './Anecdote'
import { voteAnecdoteAction } from '../actions/anecdoteAction'
import { showMessageAction, hideMessageAction } from '../actions/messageAction'

const AnecdoteList = ({
  anecdotes,
  filteredAnecdotes,
  voteAnecdoteAction,
  showMessageAction,
  hideMessageAction
}) => {
  const vote = id => () => {
    voteAnecdoteAction({ id })
    const votedAnecdote = anecdotes.find(anecdote => anecdote.id === id)
    showMessageAction({
      text: `You voted '${votedAnecdote.content}'`,
      timeoutId: setTimeout(() => {
        hideMessageAction()
      }, 5000)
    })
  }

  return (
    <>
      <h2>Anecdote list</h2>
      {filteredAnecdotes.map(anecdote => (
        <Anecdote
          key={anecdote.id}
          {...anecdote}
          voteHandler={vote(anecdote.id)}
        />
      ))}
    </>
  )
}

const anecdotesToShow = ({ filter, anecdotes }) => {
  if (filter.length === 0) {
    return anecdotes
  }
  return anecdotes.filter(anecdote => {
    return anecdote.content.toLowerCase().indexOf(filter.toLowerCase()) > -1
  })
}

const mapStateToProps = state => {
  return {
    anecdotes: state.anecdotes,
    filteredAnecdotes: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  voteAnecdoteAction,
  showMessageAction,
  hideMessageAction
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList
