import React from 'react'
import "./prgchart.scss"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'level 01',
      uv: 20,
      Scouts: 135,
      amt: 2400,
    },
    {
      name: 'level 02',
      uv: 40,
      Scouts: 100,
      amt: 2210,
    },
    {
      name: 'level 03',
      uv: 60,
      Scouts: 40,
      amt: 2290,
    },
    {
      name: 'level 04',
      uv: 80,
      Scouts: 52,
      amt: 2000,
    },
    {
      name: 'level 05',
      uv: 100,
      Scouts: 20,
      amt: 2181,
    },
    {
      name: 'level 06',
      uv: 120,
      Scouts: 10,
      amt: 2500,
    },
    {
      name: 'rovers',
      uv: 140,
      Scouts: 12,
      amt: 2100,
    },
  ];
const Prgchart = () => {
    return(
        <div className='prgchart'><div className='topic'><h1>Progress of Scouts</h1></div>
                <ResponsiveContainer width="100%" height="100%">
                  <div className="thechart">
        <BarChart
          width={500}
          height={430}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis dataKey="uv"/>
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Scouts" fill="#622b86" background={{ fill: '#eee' }} />
        </BarChart></div>
      </ResponsiveContainer>
       </div>
    )
}
export default Prgchart