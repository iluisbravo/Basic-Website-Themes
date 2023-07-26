import React from 'react';
import styles from './DashboardPage.module.css';
import LineChartComponent from '../components/DashboardIndicators/LineChartComponent';
import PieChartComponent from '../components/DashboardIndicators/PieChartComponent';
import BarChartComponent from '../components/DashboardIndicators/BarChartComponent';
import BarChartHorizontalComponent from '../components/DashboardIndicators/BarChartHorizontalComponent';

const Dashboard = () => {
    return (
        <>
            <div className='col-3'>
                <div className={`box ${styles.indicador}`}>
                    <LineChartComponent title='Title 1' color='#FF4668' />
                </div>
            </div>

            <div className='col-3'>
                <div className={`box ${styles.indicador}`}>
                    <LineChartComponent title='Title 2' color='#4BD13F' />
                </div>
            </div>

            <div className='col-3'>
                <div className={`box ${styles.indicador}`}>
                    <LineChartComponent title='Title 3' color='#5198EB' />
                </div>
            </div>

            <div className='col-3'>
                <div className={`box ${styles.indicador}`}>
                    <LineChartComponent title='Title 4' color='#EE814F' />
                </div>
            </div>

            <div className='col-3'>
                <div className={`box ${styles.indicador}`}>
                    <PieChartComponent title='Title 5' type="pie" />
                </div>
            </div>

            <div className='col-3'>
                <div className={`box ${styles.indicador}`}>
                    <PieChartComponent title='Title 6' type="donut" />
                </div>
            </div>

            <div className='col-6'>
                <div className={`box ${styles.indicador}`}>
                    <BarChartComponent />
                </div>
            </div>

            <div className='col-6'>
                <div className={`box ${styles.indicador}`}>
                    <BarChartHorizontalComponent color='#EE814F' />
                </div>
            </div>

            <div className='col-6'>
                <div className={`box ${styles.indicador}`}>
                    <BarChartHorizontalComponent color='#5198EB' />
                </div>
            </div>

            <div className='col-3'>
                <div className={`box ${styles.indicador}`}>
                    <p>Indicador 10</p>
                </div>
            </div>

            <div className='col-3'>
                <div className={`box ${styles.indicador}`}>
                    <p>Indicador 11</p>
                </div>
            </div>

            <div className='col-3'>
                <div className={`box ${styles.indicador}`}>
                    <p>Indicador 12</p>
                </div>
            </div>

            <div className='col-3'>
                <div className={`box ${styles.indicador}`}>
                    <p>Indicador 13</p>
                </div>
            </div>
        </>
    );
};

export default Dashboard;