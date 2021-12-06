import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = 
[
  {
     pyStatusWork:"In Build",
     total:249
  },
  {
     pyStatusWork:"New",
     total:359
  },
  {
     pyStatusWork:"Open",
     total:39
  },
  {
     pyStatusWork:"Resolved-Cancelled",
     total:133
  }
]



export default function BarGraph() {
  

    return (
      <ResponsiveContainer width="70%" aspect={1}>
          <BarChart

          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="pyStatusWork"   />
          <YAxis tickCount={20} />
          <Tooltip />
         
          
          <Bar dataKey="total" fill="#003e75"  barSize={30}  />
        </BarChart>
      </ResponsiveContainer>
    );
  }

