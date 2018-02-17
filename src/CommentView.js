import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from "./actions";
import { bindActionCreators } from "../../../Library/Caches/typescript/2.6/node_modules/redux";

const CommentView = (props) => {
  const { comments } = props;
  let authorEntry, commentEntry;
  const { inputStyle } = styles;
  return (
    <div>
      <input
        style={inputStyle} 
        type="text" 
        placeholder="author" 
        ref={val => authorEntry = val} 
        onKeyPress={(e) => e.key=== 'Enter'
        && props.actions.addComment(authorEntry.value, commentEntry.value)} />
      <input
        style={inputStyle} 
        type="text" 
        placeholder="comment" 
        ref={val => commentEntry = val} 
        onKeyPress={
          (e) => e.key=== 'Enter' 
          && props.actions.addComment(authorEntry.value, commentEntry.value)} />
      { comments.map(({ author, comment }) => <div key={`${comment}${author}`} style={{ fontSize: 14 }}>
          <span style={{ color: '#5792f2' }}>{author}</span>: {comment}
        </div>) }
    </div>
  );
}

const styles = {
  inputStyle: {
    height: 30,
    width: 150,
    marginRight: 10,
    borderRadius: 5
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

const CommentViewContainer = connect(mapStateToProps, mapDispatchToProps)(CommentView);
export default CommentViewContainer;
