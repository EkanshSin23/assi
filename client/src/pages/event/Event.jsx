import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { context } from '../../context/context';
import Preview from '../preview/Preview';
import './event.scss'

const Event = () => {
    const [eventname, seteventname] = useState()
    const [banner, setbanner] = useState()
    const [shortdesc, setshortdesc] = useState()
    const [text, settext] = useState()
    const [price, setprice] = useState()
    const [language, setlanguage] = useState()
    const [duration, setduration] = useState()
    const [link, setlink] = useState()
    const [date, setdate] = useState()


    const sub = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:8000/api/data", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                eventname,
                banner,
                shortdesc,
                text,
                price,
                language,
                duration,
                link, date

            }),
        })

        const data = await res.json()
    }


    return (
        <div className='event'>
            <div className="navbar">
                <div className="navbarContainer">
                    <div className="left">
                        <Link className='link' to="/">Back</Link>
                    </div>
                    <div className="right">
                        <Link className='link' to="/preview">Preview Page</Link>
                    </div>
                </div>
            </div>
            <h2>Create Event</h2>
            <div className="event_container">
                <div className="left_event_container">

                    <input type="text" placeholder='Event Name'
                        onChange={(e) => seteventname(e.target.value)}

                        name='eventname'
                    />
                    <input type="text" placeholder='Banner' name='banner' onChange={(e) => setbanner(e.target.value)}
                    />
                    <input type="text" placeholder='Short Description' name='shortdesc' onChange={(e) => setshortdesc(e.target.value)}
                    />
                    <textarea name="text" id="" cols="50" rows="10" placeholder='Please Describe Your Service' onChange={(e) => settext(e.target.value)}
                    ></textarea>
                </div>
                <div className="right_event_container">
                    <select name="language" id="" onChange={(e) => setlanguage(e.target.value)}>
                        <option value="none" selected disabled hidden>Language</option>
                        <option value="Hindi">Hindi </option>
                        <option value="English">English </option>
                    </select>
                    <select name="price" id="" onChange={(e) => setprice(e.target.value)}>
                        <option value="none" selected disabled hidden>Price</option>
                        <option value="Free">Free</option>
                        <option value="Paid">Paid </option>
                    </select>
                    <input type="text" name="duration" placeholder='Duration' onChange={(e) => setduration(e.target.value)} />
                    <input type="text" name="link" placeholder='Event Link' onChange={(e) => setlink(e.target.value)} />
                    <input type="text" name="date" placeholder='Date' onChange={(e) => setdate(e.target.value)} />
                </div>
            </div>
            <div className="button_event">
                <button type='submit' onClick={sub} >Save</button>
            </div>

        </div>
    )
}

export default Event