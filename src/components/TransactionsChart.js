import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Chart from "react-google-charts"

const pieOptions = {
    title: "",
    pieHole: 0.6,
    slices: [
      {
        color: "#2BB673"
      },
      {
        color: "#d91e48"
      },
      {
        color: "#007fad"
      },
      {
        color: "#e9a227"
      }
    ],
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "233238",
        fontSize: 14
      }
    },
    tooltip: {
      showColorCode: true
    },
    chartArea: {
      left: 0,
      top: 0,
      width: "100%",
      height: "80%"
    },
    fontName: "Roboto"
  };

const TransactionsChart = (props) => {
    console.log(props);
    console.log('cat');
    return(<Router>


        <div className="App">
        <Chart
          chartType="PieChart"
          data={[["Age", "Weight"], ["a", 12], ["b", 5.5],  ["c", 60]]}
          options={pieOptions}
          graph_id="PieChart"
          width={"100%"}
          height={"400px"}
          legend_toggle
        />
      </div>
    </Router>

    )
}
   
export default TransactionsChart;