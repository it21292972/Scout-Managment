import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/navbar/Header'
import Widget from '../../components/widgets/widget'
import './dash.scss'
import Chart from '../../components/chart/chart'
import Prgchart from '../../components/prgchart/prgchart'
const Dash = () => {
    return(
        <>
        <Header />
        <div className="Dash">
            <Sidebar />
            <div className='Otherstuff'>
                <div className='widgets'>
                    <Widget type="user"/>
                    <Widget type="troops"/>
                </div>
                <div className="charts">
                    <Chart/>
                    <Prgchart/>
                </div>

            </div>
           
        </div>
        </>
    )
}
export default Dash