import React from 'react'
import PropTypes from 'prop-types'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import _ from 'lodash'

/*
   Example 7: Redux

   Presentational Components: View

   Reducers: Mutate state
   - the old state
   - consume actions
   - return a new state

   Actions:
   - js objects with a type key
   {
     type: "MY_ACTION_TYPE",
     ...payload
   }
*/

 // could be an object
const initialState = 0;

const reducer = (state, action) => {
  if(_.isNil(state)) {
    return initialState;
  }

  switch(action.type) {
    case "INC":
      return state + action.value;
    case "DEC":
      return state - action.value;
  }
  return state;
}

const createIncrementAction = (value=1) =>  ({
  type: 'INC',
  value
});

const createDecrementAction = (value=1) =>  ({
  type: 'DEC',
  value
});

const store = createStore(reducer);

//does not see outside of itself
let NumberTracker = ({number, increment, decrement}) => (
  <div>
    <p>{number}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    number: state
  }
}

/*
const mapDispatchToProps = {
  increment: createIncrementAction(10),
  decrement: createDecrementAction(5)
}
*/

//The long way of doing the above --^

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(createIncrementAction(5)),
    decrement: () => dispatch(createDecrementAction(10))
  }
}

NumberTracker = connect(mapStateToProps, mapDispatchToProps)(NumberTracker)

const Example7 = (props) => {
  return (
    <Provider store={store}>
      <NumberTracker />
    </Provider>
  )
}

Example7.propTypes = {
}

export default Example7
