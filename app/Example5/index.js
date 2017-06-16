import React from 'react'
import PropTypes from 'prop-types'

/*
   Example 5: Helper Components

   Everything in react is just a function. This means that you can have helper components
   that help you render more complex UIs.

   This helps with refactoring and code quality!
*/

// Technically these are components
// However, they are so small they don't deserve their own files
// If we want to reuse these later, we can extract them trivially
const Greeting = ({name}) => <p>Hello, {name}!</p>
const Failure = () => <p>Please log in!</p>

//Literally just a function:
function renderName(name) {
  return (
    <p>{name}</p>
  )
}

const Example5 = ({isLoggedIn, name}) => (
  <div>
    <h1>My Example React App</h1>
    {isLoggedIn ? <Greeting name={name} /> : <Failure />}
  </div>
)

Example5.propTypes = {
  name: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

export default Example5
