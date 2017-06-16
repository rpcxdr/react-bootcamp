import React from 'react'

/*
   Example 2: Props

   Props are arguments to a component. They look just like HTML attributes:

   <MyComponent myProp='hello world' mySecondProp={4} />

   `myProp` and `mySecondProp` are both props.
   `myProp` is a string, where as `mySecondProp` is a javascript number
*/

//This function takes an object of all the props
const Example2 = ({name}) => (
  <div>
    <h1>My Example React App</h1>
    <p>This is a subtitle!</p>
    <p>Hello, {name}!</p>
  </div>
)

export default Example2
