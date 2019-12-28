import React from 'react'
import { connect } from 'react-redux'
import Anecdote from './Anecdote'
import { voteAnecdoteAction } from '../actions/anecdoteAction'
import { showMessageAction, hideMessageAction } from '../actions/messageAction'

const AnecdoteList = ({
  filteredAnecdotes,
  voteAnecdoteAction,
  showMessageAction,
  hideMessageAction
}) => {
  const vote = anecdoteToUpdate => async () => {
    try {
      await voteAnecdoteAction(anecdoteToUpdate)

      showMessageAction({
        text: `You voted '${anecdoteToUpdate.content}'`,
        timeoutId: setTimeout(() => {
          hideMessageAction()
        }, 5000)
      })
    } catch (err) {
      showMessageAction({
        text: `Failed to vote '${anecdoteToUpdate.content}'`,
        timeoutId: setTimeout(() => {
          hideMessageAction()
        }, 5000)
      })
    }
  }

  return (
    <>
      <h2>Anecdote list</h2>
      {filteredAnecdotes.map(anecdote => (
        <Anecdote
          key={anecdote.id}
          {...anecdote}
          voteHandler={vote(anecdote)}
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
