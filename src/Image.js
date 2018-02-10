import React from "react";

const Image = (props) => {
  if (props.loading) {
    return <h2>Loading...</h2>
  } else {
    return <div>
      <img src={props.imageUrl} alt='' />
    </div>
  }
};

export default Image;
