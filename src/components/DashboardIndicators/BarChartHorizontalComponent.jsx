import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';

const BarChartHorizontalComponent = (props) => {
    const [state, setState] = useState();
    const color = props.color;
    const title = props.title;
    const type = props.type;
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    useEffect(() => {
        var options = {
            series: [{
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                        'United States', 'China', 'Germany'
                    ],
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
                        type="bar"
                        width="150%"
                        height="100%"
                    />
                )
            }

        </>
    );
};

export default BarChartHorizontalComponent;