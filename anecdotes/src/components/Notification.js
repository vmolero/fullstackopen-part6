import React from 'react'

const Notification = ({ store }) => {
  const text = store.getState().message.text
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    visibility: text.length > 0 ? 'visible' : 'hidden'
  }
  return <div style={style}>{text}</div>
}

export default Notification
