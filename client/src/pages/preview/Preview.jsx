import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import './preview.scss'


const Preview = () => {
    let [datafinal, setdata] = useState([{}])
    useEffect(() => {
        fetch("http://localhost:8000/api/data")
            .then(res => res.json())
            .then(info => {
                setdata(info.data)
                console.log(datafinal)
            })
    }, [])
    // const f = async () => {
    //     try {
    //         await fetch("http://localhost:8000/api/data")
    //             .then(res => res.json())
    //             .then(info => {
    //                 setdata(info.data)
    //                 console.log(datafinal)
    //             })



    //     } catch (error) {
    //         console.log(error);
    //     }


    // }





    return (<>
        <div className='img' >
        </div>




        {datafinal.map((item) => {
            return (
                <div className="preview_container">
                    <div className="left">
                        <h1>{item.eventname}</h1>
                        <p>{item.shortdesc}</p>
                        <h2>{item.banner}</h2>
                        <p>{item.text}</p>
                    </div>
                    <div className="right">
                        <h2>${item.price}</h2>
                        <a href="/#"><p>{item.link}</p></a>
                        <p>{item.language}</p>
                        <h2>{item.duration} Min</h2>
                        <p>{item.date}</p>

                    </div>
                </div>);
        })}






    </>
    )
}

export default Preview



// {
//     eventname.map((item) => {
//         return (<>
//             <h1>{item.name}</h1>
//             <h1>{item.banner}</h1>
//             <h1>{item.text}</h1>
//             <h1>{item.shortdesc}</h1>
//         </>
//         )
//     })
// }

// {
//     eventname.map((arr) => {
//         return (<><div className="preview_container">

//
//         </div></>);
//     })
// }