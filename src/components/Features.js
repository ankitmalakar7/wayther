import React from 'react'
import Footer from './Footer'

export default function Features(props) {
    return (
        <>
        <div className="container">
        <div className="thb" >
            <li>
                <ul>
                    <p>Current & forecasted weather data for any valid location.</p>
                    <p>Warning of wrong data for every invalid location.</p>
                    <p>Forcasted weather datas for consecutive 8 days.</p>
                    <p>Rest ? use & invent...</p>
                </ul>
            </li>
        </div>
        <Footer/>
        </div>
        </>
    )
}
