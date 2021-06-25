import React from 'react'
import {Bar} from 'react-chartjs-2'
import './styles/productGraph.scss'

const ProductGraph = () => {
    const data = {
        labels:["wk15","wk16","wk17","wk18","wk19","wk20"],
      
        datasets: [
          {
            label: 'Active Use',
            fill: true,
            lineTension: 0.1,
            backgroundColor: '#053E5E',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [26,36,26,56,66,78]
          },
      
        ]
      };



    return (
        <div className="graph_container">
            <Bar data={data} />
        </div>
    )
}

export default ProductGraph
