import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';

const BarChartComponent = (props) => {
    const [state, setState] = useState();
    const color = props.color;
    const title = props.title;
    const type = props.type;
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    useEffect(() => {
        var options = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003],
                    labels: {
                        show: true,
                        style: {
                            colors: Array(13).fill(isDarkMode ? "white" : "black"),
                        }
                    }
                },
                yaxis: {
                    labels: {
                        show: true,
                        style: {
                            colors: Array(13).fill(isDarkMode ? "white" : "black"),
                        }
                    }
                }
            },
            series: [
                {
                    name: "series-1",
                    data: [30, 40, 45, 50, 49, 60, 70, 91, 30, 40, 45, 50,10]
                }
            ]
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

export default BarChartComponent;