import React from 'react'
import "./chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    {
      name: '2016',
      President_Awardees: 72,
      pv: 20,
      amt: 2400,
    },
    {
      name: '2017',
      President_Awardees: 67,
      pv: 40,
      amt: 2210,
    },
    {
      name: '2018',
      President_Awardees: 80,
      pv: 60,
      amt: 2290,
    },
    {
      name: '2019',
      President_Awardees: 105,
      pv: 80,
      amt: 2000,
    },
    {
      name: '2020',
      President_Awardees: 28,
      pv: 100,
      amt: 2181,
    },
    {
      name: '2021',
      President_Awardees: 22,
      pv: 120,
      amt: 2500,
    },
    {
      name: '2022',
      President_Awardees: 40,
      pv: 140,
      amt: 2100,
    },
  ];
const Chart=() => {
    return(
        <div className="chart">
          <div className="topic">
            <h1>Number of President Scouts</h1>
            </div> 
        <ResponsiveContainer width="100%" height="100%">
        <div className="achart"><AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="pv"/>
          <Tooltip />
          <Area type="monotone" dataKey="President_Awardees" stroke="#8884d8" fill="#622b86" />
        </AreaChart></div>
      </ResponsiveContainer></div>
      
    )
}
export default Chart