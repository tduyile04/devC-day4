import React from "react";

const Gallery = (props) => {
  const { album, likes, handleViewClick, handleLikeClick } = props;
  const { galleryStyle, cardStyle, imageStyle, textStyle, buttonStyle } = styles;
  if (!album) {
    return <h2>Loading...</h2>
  } else {
    return (
      <div className="gallery" style={galleryStyle}>
        {album.map(picture => {
          return (
            <div key={picture.id} className="picture" style={cardStyle}>
              <img style={imageStyle} src={picture.image} alt={picture.source} />
              <div style={textStyle}>{picture.description}</div>
              <div>
                <button 
                  style={buttonStyle}
                  onClick={() => handleViewClick(picture.id)}
                >
                  View
                </button>
                <button 
                  style={buttonStyle}
                  onClick={() => handleLikeClick(picture.id)}>
                    <span style={{ color: '#5792f2' }}>{likes[picture.id]}</span> Like
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

const styles = {
  galleryStyle: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    alignItems: 'space-around'
  },
  cardStyle: {
    height: 600,
    width: 400,
    backgroundColor: '#dee1e5',
    marginBottom: 50
  },
  imageStyle: {
    display: 'block',
    maxWidth: 400,
    marginBottom: 10,
    height: '60vh'
  },
  textStyle: {
    padding: 10,
    fontSize: 15,
  },
  buttonStyle: {
    width: 100,
    height: 40,
    zIndex: 1,
    borderRadius: 5,
    marginLeft: 10,
  }
};

export default Gallery;
