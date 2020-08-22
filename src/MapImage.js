import React, { Component } from "react";
import Chart from "chart.js";

import "materialize-css/dist/css/materialize.min.css";

class MapImage extends Component {
  constructor() {
    super();
    this.state = {
      allCases : [],
    };
  }

  async componentDidMount() {
    const getDetails = await fetch(
      "https://www.disease.sh/v3/covid-19/historical/all"
    );
    const result = await getDetails.json();
    
    const ctx = document.getElementById("myChart").getContext("2d");
    // eslint-disable-next-line
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: Object.values(result.cases),
          datasets: [{
              label: 'Total Number of cases',
              data: Object.values(result.cases),
              borderWidth: 1,
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }

  render() {
    return (
      <div className="video-container">
        <canvas id="myChart" width="400" height="130"></canvas>
      </div>
    );
  }
}

export default MapImage;
