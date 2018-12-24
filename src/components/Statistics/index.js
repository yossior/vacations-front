import React, { Component } from 'react'
const Chart = require('chart.js');

class Statistics extends Component {

    componentDidMount() {
        const self = this;
        fetch('http://localhost:3000/admin/statistics', {
            method: "GET"
        }).then(data => data.json())
            .then(followedArray => {
                this.setState({ ...this.state, followedVacations: followedArray }, () => {
                    var ctx = document.getElementById('myChart').getContext('2d');
                    var chart = new Chart(ctx, {
                        // The type of chart we want to create
                        type: 'bar',
                        // The data for our dataset
                        data: {
                            labels: self.state.followedVacations.map(vac => vac.location),
                            datasets: [{
                                data: self.state.followedVacations.map(vac => vac.followers),
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            legend: false,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }
                    });
                });
                debugger
            })

    }
    render() {
        return (
            <div>
                <div className="chart-container" style={{ position: 'relative', height: '15vh', width: '40vw' }}>
                    <canvas id="myChart" width="400" height="400"></canvas>
                </div>
            </div>
        )
    }
}

export default Statistics;