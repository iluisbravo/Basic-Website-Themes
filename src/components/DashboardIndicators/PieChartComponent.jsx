import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';

const PieChartComponent = (props) => {
    const [state, setState] = useState();
    const color = props.color;
    const title = props.title;
    const type = props.type;
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    useEffect(() => {
        var options = {
            series: [44, 55, 13, 43, 22],
            options: {
                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
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
                        type={type}
                        height={"100%"}
                        width={"100%"}
                    />
                )
            }

        </>
    );
};

export default PieChartComponent;