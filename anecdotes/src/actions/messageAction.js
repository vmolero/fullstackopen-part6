const type = {
  SHOW: 'SHOW',
  HIDE: 'HIDE'
}

const showMessageAction = ({ text, seconds }) => {
  return async dispatch => {
    dispatch({
      type: type.SHOW,
      text,
      timeoutId: setTimeout(() => dispatch(hideMessageAction()), seconds * 1000)
    })
  }
}

const hideMessageAction = () => {
  return {
    type: type.HIDE
  }
}

export default type
export { showMessageAction, hideMessageAction }
