import React, { Component } from "react";
import Plot from "react-plotly.js";
class Pie extends Component {
  render() {
    return (
      <Plot
        data={[
          {
            values: [19, 26, 55],
            labels: ["Residential", "Non-Residential", "Utility"],
            type: "pie",
          },
        ]}
        layout={{
          height: 400,
          width: 500,
        }}
      />
    );
  }
}
export default Pie;
