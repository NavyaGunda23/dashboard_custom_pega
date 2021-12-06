import React from 'react'


import { PieChart, Pie, Sector, Cell,Tooltip, Label,Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];

const data = [
    {
       VehicleType:"Auto",
       total:10
    },
    {
       VehicleType:"Motorcycle",
       total:16
    },
    {
       VehicleType:"RV",
       total:2
    },
    {
       VehicleType:"Water craft",
       total:3
    },
    {
       VehicleType:null,
       total:52
    }
 ]

const COLORS = ['#28813E', '#01AA9F', '#FEB646', '#015FA7 ','#FE863D '];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN) ;

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function PieCharts(){

    return (
        <ResponsiveContainer width="70%" aspect={1}>
         <PieChart width={600} height={600}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
          
            fill="#8884d8"
            dataKey="total"
            
          >
             
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip  />
               
        </PieChart>
        </ResponsiveContainer>
    );
  }

  export default PieCharts
