import React, { Component } from "react";

class CommentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  submitComment = (e) => {
    if (e.key === 'Enter') {
      this.setState((prevState) => ({ 
        comments: [...prevState.comments, { author: this.author.value, comment: this.comment.value }] 
      }), () => {
        this.author.value = '';
        this.comment.value = '';
      })
    }
  }

  render() {
    const { comments } = this.state;
    const { inputStyle } = styles;
    return (
      <div>
        <input
          style={inputStyle} 
          type="text" 
          placeholder="author" 
          ref={val => this.author = val} 
          onKeyPress={this.submitComment} />
        <input
          style={inputStyle} 
          type="text" 
          placeholder="comment" 
          ref={val => this.comment = val} 
          onKeyPress={this.submitComment}/>
        { comments.map(({ author, comment }) => <div key={`${comment}${author}`} style={{ fontSize: 14 }}>
            <span style={{ color: '#5792f2' }}>{author}</span>: {comment}
          </div>) }
      </div>
    );
  }
}

const styles = {
  inputStyle: {
    height: 30,
    width: 150,
    marginRight: 10,
    borderRadius: 5
  }
}

export default CommentView;