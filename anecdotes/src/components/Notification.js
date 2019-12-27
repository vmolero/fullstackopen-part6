import React from 'react'
import { connect } from 'react-redux'

const Notification = ({ message }) => {
  const text = message.text
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    visibility: text.length > 0 ? 'visible' : 'hidden'
  }
  return <div style={style}>{text}</div>
}

const mapStateToProps = state => {
  return {
    message: state.message
  }
}

const ConnectedNotification = connect(mapStateToProps, null)(Notification)

export default ConnectedNotification
