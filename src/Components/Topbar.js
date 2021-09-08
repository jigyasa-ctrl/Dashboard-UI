import React from 'react'

function Topbar() {
    return (
        <div className="topbar">
            <h1>Dashboard</h1>
            <span>
                <input placeholder="Search..." />
                <img src="https://img.icons8.com/ios/30/000000/bell.png" style={{paddingRight: '10px'}}/>
                <img src="https://static.turbosquid.com/Preview/2019/01/11__00_35_27/FM_TS2.pngEBF2CE9A-EAC1-48D4-BA04-987494C205A2Large.jpg" style={{borderRadius: '50%'}} height="50px"></img>
            </span>
        </div>
    )
}

export default Topbar
