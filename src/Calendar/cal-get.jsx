import Calendar from "react-calendar";
import "./calendar.css";
import Modal from "./temp-view";

import React, { useState } from "react";
import axios from "axios";

const CalendarWrap = () => {
  const [date, setDate] = useState(new Date());

  const [show, setShow] = useState(false);

  const [cday, setCday] = useState(new Date());
  cday.setHours(0, 0, 0, 0);

  const [available, setAvailable] = useState({
    morning: true,
    mid: true,
    afternoon: true,
  });
  const showModal = () => {
    setShow(!show);
  };

  const onChange = (date) => {
    setDate(date);
    getTimes(date);
    showModal();
  };

  const getTimes = async (date) => {
    try {
      const temp = date.toISOString().split("T")[0];
      console.log(temp);
      const response = await axios.get(`/times/${temp}`);
      console.log("got the times", response.data);
      setAvailable(response.data);
    } catch {
      console.log("Error fetching");
    }
  };
  return (
    <div id="Calendar">
      <div className="Calendar-Container">
        <h1 className="Title">Calendar</h1>

        <h2 className="Instructions">Schedule an Event with Us! </h2>
      </div>
      <Calendar onChange={onChange} value={date} minDate={cday} />

      <Modal
        show={show}
        handleClose={showModal}
        date={date}
        times={available}
      ></Modal>
    </div>
  );
};

export default CalendarWrap;
