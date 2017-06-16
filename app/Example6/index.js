import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import color from 'color'

/*
   Example 6: Styles

   There are *tons* of ways of styling React components. The main features that we look for are:
   1. Style Isolation
   2. Modularity
   3. Ease of Use (Boilierplate code, quirks, etc..)

   We have tried several options but the best so far is a library called Radium.
*/
const styles = {
  myStyle: {
    color: 'red'
  }
}

const Example6 = () => {
  return (
    <div>
      <h1 style={styles.myStyle}>My Example React App</h1>
    </div>
  )
}

Example6.propTypes = {
  name: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}


export default Radium(Example6)
