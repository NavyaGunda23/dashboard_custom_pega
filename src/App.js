import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import BarGraph from './components/BarGraph'
import PieCharts from './components/PieCharts'
import Legends from './components/Legends' 
import './App.css'


function App() {

  

  const [ data, setData] = useState({
    piecartLegends:[
      {
      name:"Auto",
      color:"#FE863D "
      },
      {
        name:"Motorcycle",
        color:"#01AA9F"
      },
      {
        name:"RV",
        color:"#FEB646"
      },
      {
        name:"Water Craft",
        color:"#015FA7"
      },
      {
        name:"N/A",
        color:"#28813E"
      }
    ],
    barLegends:[
      {
        name:"Count Case ID",
        color:"#003e75"
      }
    ]
  })
  return (
    <div className="App">
      <Sidebar />
      <div className="right-content">
        <h4>Insight Page</h4>
        <div className="graph-parent">
            <div className="graph-section">
              <h4>Vehicle Type</h4>
              <div className="graphs-data">
                <PieCharts />
                 <div>
                 <Legends leg_data={data.piecartLegends}/>
                 </div>
              </div>
              <p className="x_axis_label">Vehicle Type</p>
            </div>
            <div className="graph-section">
               <h4>Home Mortage by work status</h4>
               <p className="y_axis_label">Count Case ID</p>
               <div className="graphs-data">
                  <BarGraph  />
                  <div>
                    <Legends leg_data={data.barLegends}/>
                  </div>
                </div>
                <p className="x_axis_label">Work Status</p>
            </div>
        </div>
         
          
      </div>
      
    </div>
  );
}

export default App;
