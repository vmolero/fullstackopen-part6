# fullstackopen-part6 > unicafe

_my notes_

Simple reducer with dispatch actions in main file.

## How to run the exercise

```bash
$ git clone https://github.com/vmolero/fullstackopen-part6.git
$ cd fullstackopen-part6/unicafe
$ npm i
$ npm start
```

## State

Since state is kept in the upper component App, each component gets what it needs from the store:

```html
// ...
<Statistics
  good="{store.getState().good}"
  neutral="{store.getState().ok}"
  bad="{store.getState().bad}"
/>
// ...
```

## Basics

```bash
$ npm i redux
```

3 methods:

1. **dispatch**: store.dispatch(action), triggers an action in the store
2. **getState**: store.getState(), gives the current state
3. **subscribe**: store.subscribe(fn), fn is called when state changes

Subscribe is needed to render the App:

```javascript
const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

renderApp();
store.subscribe(renderApp);
```

Reducers must be PURE functions

Functions that create actions are called action creators:

```javascript
const createNote = content => {
  return {
    type: "NEW_NOTE",
    data: {
      content,
      important: false,
      id: generateId()
    }
  };
};
```

## Reducer tests

Use of `dee-freeze` library to ensure immutability:

```bash
$ npm i -D deep-freeze
```

Example of test:

```javascript
test("good is incremented", () => {
  const action = {
    type: "GOOD"
  };
  const state = initialState;

  deepFreeze(state);
  const newState = counterReducer(state, action);
  expect(newState).toEqual({
    good: 1,
    ok: 0,
    bad: 0
  });
});
```
