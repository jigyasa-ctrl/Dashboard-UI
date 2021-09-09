import React from 'react'

import Cards from './SubComponent/Cards'
import LineCharts from './SubComponent/LineChart'

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
            <div></div>
        </div>
    )
}

export default DashUi
