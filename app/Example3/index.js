import React from 'react'

/*
   Example 3: Children

   Children are the elements that fall between the opening and closing tags
   of a component.

   <MyComponent>
     <p>Hello!</p>
   </MyComponent>

   The paragraph `p` is a child of `MyComponent`

   NOTE: It is the responsibility of the component to render it's children
*/

//This function takes an object of all the props
const Example3 = (props) => (
  <div>
    <h1>My Example React App</h1>
    <p>This is a subtitle!</p>
    {props.children}
  </div>
)

export default Example3
