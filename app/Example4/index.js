import React from 'react'
import PropTypes from 'prop-types'

/*
   Example 4: PropTypes

   Props are arguments to a component. They look just like HTML attributes:

   <MyComponent myProp='hello world' mySecondProp={4} />

   `myProp` and `mySecondProp` are both props.
   `myProp` is a string, where as `mySecondProp` is a javascript number
*/

const Example4 = ({name, children}) => (
  <div>
    <h1>My Example React App</h1>
    <p>
      Hello, {name}!
    </p>
    <p>
      {children}
    </p>
  </div>
)

Example4.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node) // yes, children are just a prop!
}

export default Example4
