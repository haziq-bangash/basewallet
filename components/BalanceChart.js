import { Line } from "react-chartjs-2";
import styled from 'styled-components';
import Chart from 'chart.js/auto';
import React from 'react';

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            fill: false,
            lineTension: 0.1,
            BackgroundColor: '#3773f5',
            borderColor: '#3773f5',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#3773f5',
            pointBackgroundColor: '#3773f5',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#3773f5',
            pointHoverBorderColor: '#3773f5',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65,59,80,81,56,72,45,67,55,42,72,95],
        },
    ]
};

const Data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "dataset",
        fill: false,
            lineTension: 0.1,
            BackgroundColor: '#3773f5',
            borderColor: '#3773f5',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#3773f5',
            pointBackgroundColor: '#3773f5',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#3773f5',
            pointHoverBorderColor: '#3773f5',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65,59,80,81,56,72,45,67,55,42,72,93],
      },
    ]
  };

const options = {
    plugins: {
        legend: {
            display : false,
        }
    }
};

const BalanceChart = ({data, options}) => {
  return (
    <div>
        <Line data={Data} options={options} width={400} />
    </div>
  )
}

export default BalanceChart;