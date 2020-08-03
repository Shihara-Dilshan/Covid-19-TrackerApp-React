import React, { Component } from "react";

import "materialize-css/dist/css/materialize.min.css";

class MapImage extends Component {
  constructor() {
    super();
    this.state = {};
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
