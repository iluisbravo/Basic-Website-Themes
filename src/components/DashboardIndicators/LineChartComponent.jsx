import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';

const LineChartComponent = (props) => {
    const [state, setState] = useState();
    const color = props.color;
    const title = props.title;
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    useEffect(() => {
        var options = {
            series: [{
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: title,
                    align: 'left',
                    style: {
                        color: isDarkMode ? "white" : "black"
                    },
                },
                grid: {
                    row: {
                        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                    labels: {
                        show: true,
                        style: {
                            colors: Array(12).fill(isDarkMode ? "white" : "black"),
                        }
                    }
                },
                yaxis: {
                    labels: {
                        show: true,
                        style: {
                            colors: Array(12).fill(isDarkMode ? "white" : "black"),
                        }
                    }
                },
                colors: [color]
            },

        };

        setState(options);
    }, [isDarkMode]);

    return (
        <>
            {
                state && (
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="line"
                        width="100%"
                        height="100%"
                    />
                )
            }

        </>
    );
};

export default LineChartComponent;