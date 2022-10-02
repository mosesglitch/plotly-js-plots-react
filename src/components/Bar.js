import React from "react";
import Plot from "react-plotly.js";

class Bar extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            x: [1, 2, 3, 4, 5],
            y: [2, 6, 3, 9, 11],
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
          { type: "bar", x: [1, 2, 3, 4, 5], y: [2, 5, 3, 11, 12] },
        ]}
        layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
      />
    );
  }
}
export default Bar;
