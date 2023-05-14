import React from "react";
import Calendar from "react-calendar";
import { useState } from "react";
import "./calendar.css";


const CalendarWrap =() =>{


    const [date,setDate] = useState(new Date());
    return(

<div className="calendar-container">
<Calendar onChange={setDate} value={date}/>
</div>
    );


}




const send_request = () => {



}


export default CalendarWrap;