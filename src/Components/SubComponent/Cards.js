import React from 'react'

function Cards({link, title, data, color}) {
    return (
        <div className="card" style={{backgroundColor: color}}>
            <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-like-project-management-and-development-flatart-icons-outline-flatarticons.png" height="20px" width="20px"/>
            <p>Total Users</p>
            <h3>386487364</h3>
        </div>
    )
}

export default Cards
