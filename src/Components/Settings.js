import React from 'react'
import DashUi from './DashUi'
import SettingsUI from './SettingsUI'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

function Settings() {
    return (
        <div class="dashboard">
      <Sidebar />
      <div class="topbar-container" style={{overflow: 'overlay', height: '40rem'}}>
        <Topbar title="Settings" />
        <SettingsUI />
      </div>
    </div>
    )
}

export default Settings
