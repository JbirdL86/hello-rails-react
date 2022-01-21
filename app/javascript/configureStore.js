import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  greetings: [
    {
      greeting: 'test',
      id: '123'
    },
  ]
};

function rootReducer(state, action) {
  console.log(action.type)
  switch (action.type) {
    case 'GET_THINGS_SUCCESS':
      return action.json.greetings[Math.floor(Math.random() * 8)];
  }
  return state
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
      )
    )
  );
  return store;
}
