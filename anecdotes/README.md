# fullstackopen-part6 > anecdotes

_my notes_

Using Redux 'the right way' where concerns are separated.

## How to run this exercise

```bash
$ git clone https://github.com/vmolero/fullstackopen-part6.git
$ cd fullstackopen-part6/anecdotes
$ npm i
$ npm run server && npm start
```

A json server is run to play as a backend, for that, package `json-server`is used. A rule in `package.json` allows to run it:

package.json

```json
{
  "scripts": {
    "server": "json-server -p3001 db.json"
  }
}
```

## Redux advanced concepts

For the sake of clarity **Reducers** and **Action dispatchers** are separated in different files, see:

- src/actions
- src/reducers

### Separation of concerns

Concerns are split by using `react-redux` library via `connect()`. Example how to allow dependencies be used as props:

src/components/AnecdoteList.js

```javascript
// Method to be used outside the component, and set as a prop in 'mapStateToProps'
const anecdotesToShow = ({ filter, anecdotes }) => {
  if (filter.length === 0) {
    return anecdotes
  }
  return anecdotes.filter(anecdote => {
    return anecdote.content.toLowerCase().indexOf(filter.toLowerCase()) > -1
  })
}

// Function to map state properties to component props
const mapStateToProps = state => {
  return {
    filteredAnecdotes: anecdotesToShow(state)
  }
}

// Map of dispatcher functions
const mapDispatchToProps = {
  voteAnecdoteAction,
  showMessageAction
}

// This is how the original component is 'connected'
const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

// Export the connected version
export default ConnectedAnecdoteList
```

And this is how it looks the component props now:

src/components/AnecdoteList.js

```javascript
const AnecdoteList = ({
  filteredAnecdotes, // Mapped using 'mapStateToProps'
  voteAnecdoteAction, // Both actions mapped using 'mapDispatchToProps'
  showMessageAction
}) => {
  // ...
}
```

**As a consequence, no more need to pass the `store` down to children components**:

src/app.js

```html
<div>
  <h1>Anecdotes (Redux version)</h1>
  <Notification />
  <Filter />
  <AnecdoteList />
  <AnecdoteForm />
</div>
```

### Async dispatcher actions

Actions that require asynchrony can be handled using a library call `redux-thunk`.

Store is now put in a separate file, where thunk is initialized like so:

src/store.js

```javascript
// ...
const store = createStore(reducer, applyMiddleware(thunk))
// ...
```

As a result, we can now return an async dispatch:

src/actions/anecdoteAction.js

```javascript
const newAnecdoteAction = anecdote => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(anecdote)
    dispatch({
      type: type.NEW,
      anecdote: newAnecdote
    })
  }
}
```
