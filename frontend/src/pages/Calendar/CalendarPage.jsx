import React from "react";
import Header from '../../components/navbar/Header'
import "./Calendar.scss"
import ActCalendar from '../../components/calendar/ActCalendar'

const CalendarPage = () => {
    return(
        <><Header />
        <div className="page">
            <div className="calendar">
            <ActCalendar/>
            </div>
            </div>
        </>
    )
};

export default CalendarPage