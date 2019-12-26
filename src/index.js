import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'
import Button from './components/Button'
import Feedback from './components/Feedback'
import Statistics from './components/Statistics'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  const ok = () => {
    store.dispatch({
      type: 'OK'
    })
  }
  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }

  const zero = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }
  return (
    <div>
      <Feedback handleGood={good} handleNeutral={ok} handleBad={bad} />
      <Statistics
        good={store.getState().good}
        neutral={store.getState().ok}
        bad={store.getState().bad}
      />
      <Button onClick={zero} text={'reset'} />
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
