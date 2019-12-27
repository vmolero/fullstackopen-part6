const type = {
  SHOW: 'SHOW',
  HIDE: 'HIDE'
}

const showMessageAction = ({ text, timeoutId }) => {
  return {
    type: type.SHOW,
    text,
    timeoutId
  }
}

const hideMessageAction = () => {
  return {
    type: type.HIDE
  }
}

export default type
export { showMessageAction, hideMessageAction }
