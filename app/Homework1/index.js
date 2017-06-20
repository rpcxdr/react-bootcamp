import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import color from 'color'
import postData from './postData.js'
import userData from './userData.js'
import Post from './Post.js'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import _ from 'lodash'
import siteFont from './siteFont.js'


const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';

/*
   Homework 1: Rendering Data

   Requirements:
   X 1. Render the list of post data (hint: use map) 
   X 2. Style the posts using at least 2 css selectors and at least 10 styles
   X 3. Make sure there are no warnings/errors in the console
   X 4. Choose one (or more) of the following additional tasks:
   X  i.   Make the page responsive (rows when on desktop, column when on mobile)
   X  ii.  Sort the posts by title, alphabetically
   X  iii. Add a header above the posts with a creative title (style it nicely)
*/
const styles = {
  postListStyle: {display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent:"center"},
  mainTitleStyle: { fontFamily: siteFont, letterSpacing: "6px", textAlign: "center", fontSize: "50px", borderStyle: "none none outset none" }
}

let Homework1 = ({postData, addPost, deletePost}) => {
  const postDataSorted = _.sortBy(postData, [function(o) { return o.title; }]);
  return (
    <div>
      <h1 style={styles.mainTitleStyle}>Blog Example</h1>
      <div style={ styles.postListStyle }>{_.map(postDataSorted,(d) => 
        <Post postItem={d} key={d.id}/>
      )}</div>
      <button onClick={addPost}>Add Post</button>
    </div>
  )
}

const initialState = { postData, userData };

const reducer = (state, action) => {
  if(_.isNil(state)) {
    return initialState;
  }
  switch(action.type) {
    case ADD_POST:
      const postDataAdd = JSON.parse(JSON.stringify(state.postData));
      postDataAdd.push({
        "userId": action.userId,
        "id": Math.random(),
        "title": action.title,
        "body": action.body
      })
      return Object.assign({}, state,  {postData: postDataAdd} );
    case DELETE_POST:
      console.log("SDFGSDGSDGSDFGD"+action.postId);
      const postData = _.filter(state.postData, (d) => (d.id!=action.postId));
      return Object.assign({}, state,  {postData: postData} );
  }
  return state;
}

const createActionAddPost = (title=Math.random().toString(36), body=Math.random().toString(36), userId=1) =>  ({
  type: ADD_POST,
  title,
  body,
  userId
});

const store = createStore(reducer);

const mapStateToProps = (state) => {
  return {
    postData: state.postData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
//    deletePost: () => dispatch(createActionDeletePost()),
    addPost: () => dispatch(createActionAddPost())
  }
}

Homework1 = connect(mapStateToProps, mapDispatchToProps)(Homework1)

Homework1.propTypes = {
}

const Homework1WithProps = (props) => {
  return (
    <Provider store={store}>
      <Homework1 />
    </Provider>
  )
}

export default Radium(Homework1WithProps)
