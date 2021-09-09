import React from 'react'

import Cards from './SubComponent/Cards'
import LineCharts from './SubComponent/LineChart'
import Example from './SubComponent/Piechart'
import Piecharts from './SubComponent/Piechart'

function DashUi() {
    return (
        <div class="dashUI">
            <div className="cards">
                <Cards color="#DDEFE0" />
                <Cards color="#F4ECDD" />
                <Cards color="#EFDADA"/>
                <Cards color="#DEE0EF" />
            </div>
            <div class="chart">
                <h3>Activities</h3>
                <p style={{color: '#858585'}}>May-June 2021</p>
               
           <LineCharts />
           </div>
            <div className="pie-user">
                <div class="piechart">
                    <span style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                    <h3>Top Products</h3>
                    <p style={{color: '#858585'}}>May-June 2021</p>
                    </span>
                    <Example />
                </div>
                <div class="piechart">
                    <span style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                    <h3>Today's Schedule</h3>
                    <p style={{color: '#858585'}}>See all </p>
                    </span>
                   <div class="meeting">
                       <h5>Meeting with suppliers from kuta bali</h5>
                       <h5 style={{color: '#858585'}}>18:00-20:00</h5>
                       <h5 style={{color: '#858585'}}>at central perk</h5>
                   </div>
                   <div class="meeting">
                       <h5>Meeting with suppliers from kuta bali</h5>
                       <h5 style={{color: '#858585'}}>18:00-20:00</h5>
                       <h5 style={{color: '#858585'}}>at central perk</h5>
                   </div>
                   <div class="meeting">
                       <h5>Meeting with suppliers from kuta bali</h5>
                       <h5 style={{color: '#858585'}}>18:00-20:00</h5>
                       <h5 style={{color: '#858585'}}>at central perk</h5>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default DashUi
