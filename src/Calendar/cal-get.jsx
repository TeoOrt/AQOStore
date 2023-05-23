import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "./calendar.css";

const CalendarWrap = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    navigate(`/AdminAdd`);
  };

  return (
    <div className="calendar-container" id="Calendar">
      <Calendar onChange={handleDateChange} value={date} />
    </div>
  );
};

export default CalendarWrap;
