import React from 'react'
import './Clock.css'

const Clock = (props) => {
    const {time} =props
    // let time = new Date()

    // Get time
    const hours = time.getHours();
    const mintues = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM"

    // Get Date
    const date = time.getDate()
    const month = time.getMonth()
    const year = time.getFullYear()
    const dateFormat = `${date}-${month}-${year}`

    // Get day
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dayFormat = daysOfWeek[time.getDay()]

    let timeFormat = `${hours % 12 || 12}:${mintues < 10 ? `0${mintues}` : mintues}:${seconds < 10 ? `0${seconds}` : seconds} ${ampm}`
    return (
        <div className='clock'>
            <h1 className='clock_heading'>Digital Clock</h1>
            <div className='clock_format'>
                <h1>Time : {timeFormat}</h1>
                <h1>Date : {dateFormat}</h1>
                <h1>Day  : {dayFormat}</h1>
            </div>
        </div>
    )
}

export default Clock
