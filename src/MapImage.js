import React, { Component } from "react";

import "materialize-css/dist/css/materialize.min.css";

class MapImage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount(){
    const getDetails= await fetch('https://www.disease.sh/v3/covid-19/historical/all');
    const result = await getDetails.json();
    console.log(result);
  }

  render() {
    return (
      <div class="video-container">
        <iframe
          title="video introduction"
          width="auto"
          height="auto"
          src="https://www.youtube.com/embed/Ma07a6svw5w"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        ></iframe>
      </div>
    );
  }
}

export default MapImage;
