import React, { Component } from "react";
import Header from "./Header";
import Image from "./Image";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      image: null,
      loading: false,
    }

    this.getImage = this.getImage.bind(this);
  }

  componentWillMount() {
    this.getImage();
  }

  getImage() {
    this.setState({
      loading: true
    });

    axios.get("http://www.splashbase.co/api/v1/images/random")
      .then((response) => {
        // set image data to state
        this.setState({
          image: response.data.url,
          loading: false
        });
      });
  }

  render() {
    return (
      <div>
        <Header getImage={this.getImage} />
        <Image imageUrl={this.state.image} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
