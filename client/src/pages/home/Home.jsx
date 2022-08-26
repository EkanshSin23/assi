import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { context } from '../../context/context'
import './home.scss'
const Home = () => {

    return (
        <div className='home'>
            <div className="sidebar">
                <div className="dashboard">Dashboard</div>
            </div>
            <div className="homeContainer">
                <h1>Welcome, Admin</h1>
                <p>loren ipsum dummy</p>
                <Link className='link' to="/event">
                    <div className="button">
                        <span className="icon">+</span>
                        <span className='button_text'>Add Event</span>
                    </div>
                </Link>


            </div>
        </div>
    )
}

export default Home