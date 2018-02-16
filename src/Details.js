import React, { Component } from 'react';
import CommentView from './CommentView';

const Details = ({ likes, imageDetails, handleBackClick, handleCommentClick, handleLikeClick, showInputFields }) => {
  const { id, image, source, description } = imageDetails[0];
  const { buttonStyle, overlayStyle, overlayContentStyle, imageStyle, textContentStyle } = styles;
  return (
    <div style={overlayStyle}>
      <section style={overlayContentStyle}>
        <img src={image} alt={source} style={imageStyle} />
        <aside style={textContentStyle}>
          <div style={{ marginBottom: 50 }}>
            { !showInputFields ? description : <CommentView /> }
          </div>
          <button
            style={buttonStyle}
            onClick={() => handleLikeClick(id)}>
            <span style={{ color: '#5792f2' }}>{likes[id]}</span> Like
          </button>
          <button 
            style={buttonStyle}
            onClick={handleCommentClick}>{!showInputFields ? "Comment": "Description"}</button>
          <button 
            style={buttonStyle}
            onClick={handleBackClick}>Back</button>
        </aside>
      </section>
    </div>
  );
};


const styles = {
  buttonStyle: {
    width: 100,
    height: 40,
    zIndex: 1,
    borderRadius: 5,
    marginLeft: 10,
  },
  overlayStyle: {
    position: 'fixed', /* Sit on top of the page content */
    width: "100%", /* Full width (cover the whole page) */
    height: "100%", /* Full height (cover the whole page) */
    top: 0, 
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)', /* Black background with opacity */
    zIndex: 2, /* Specify a stack order in case you're using a different order for other elements */
    cursor: 'pointer',
  },
  overlayContentStyle: {
    backgroundColor: 'white',
    display: "flex",
    flexDirection: 'row',
    width: '80%',
    margin: 'auto',
    position: "absolute",
    top: "50%",
    left: "50%",
    fontSize: 20,
    transform: "translate(-50%,-50%)",
  }, 
  imageStyle: {
    width: 600,
    height: 400,
    padding: 20
  },
  textContentStyle: {
    padding: 20,
    overflowY: "scroll",
    height: 400
  }
};

export default Details;