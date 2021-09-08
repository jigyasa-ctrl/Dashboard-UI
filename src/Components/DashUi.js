import React from 'react'
import Cards from './SubComponent/Cards'

function DashUi() {
    return (
        <div class="dashUI">
            <div className="cards">
                <Cards color="#DDEFE0" />
                <Cards color="#F4ECDD" />
                <Cards color="#EFDADA"/>
                <Cards color="#DEE0EF" />
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default DashUi
