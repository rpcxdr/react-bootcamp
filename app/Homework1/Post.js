import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import color from 'color'
import postData from './postData.js'
import _ from 'lodash'
import userData from './userData.js'
import siteFont from './siteFont.js'
import { Provider, connect } from 'react-redux'

/*
  Render the whole post.
*/

const DELETE_POST = 'DELETE_POST';

const styles = {
  postStyle: {
    color: 'red'
  },
  postFrameStyle: {
    position: "relative",
    backgroundColor: 'rgb(230, 230, 230)',
    boxShadow: '10px 10px 10px -5px rgba(100, 100, 100, 0.74)', 
    margin: 10,
    padding: 10,
    width: 500
  },
  userNameStyle: {
    textAlign: "left",
    fontStyle: "italic",
    fontFamily: siteFont
  },
  postTitleStyle: {
    fontFamily: siteFont
  },
  deleteButtonStyle: {
    position: "absolute",
    bottom: "10",
    right: "10"
  },
  postContentStyle: {
    fontFamily: siteFont
  }
};

const createActionDeletePost = (postId=1) =>  ({
  type: DELETE_POST,
  postId
});

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (postId) => dispatch(createActionDeletePost(postId)),
  }
}

const mapStateToProps = (state) => {
  return {
    postData: state.postData
  }
}

let Post = ({deletePost, postItem: {userId, id, title, body}}) => {
  //const userName = _.find(userData, (u) => (u.id === userId));

  const userName = _.find(userData, (u) => (u.userId ===userId)).name;

  return (
    <div style={styles.postFrameStyle} >
        <h1 style={styles.postTitleStyle}>{title}</h1>
        <p style={styles.postContentStyle}>{body}</p>
        <p style={ styles.userNameStyle}>- {userName}</p>
        <button  style={styles.deleteButtonStyle}  onClick={() => deletePost(id)}>Delete Post</button>
    </div>
  )
}

Post = connect(mapStateToProps, mapDispatchToProps)(Post);

Post.propTypes = {
  postItem: PropTypes.shape({
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string
  }).isRequired
}

export default Radium(Post)
