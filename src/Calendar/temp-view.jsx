import React from "react";
import axios from "axios";
import "./Modal.css";
import { useState } from "react";
const Modal = ({ handleClose, show, children, date, times }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const [time, setTime] = useState("9am");
  const handleChange = (event) => {
    setTime(event.target.value);
  };

  //  --NOTE PROTOTYPE CODE
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      date: date.toString(),
      time: time,
    };
    try {
      const response = await axios.post("/your-api-endpoint", data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    handleClose();
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h1>Date Selected For Scheduling {date.toLocaleDateString()}</h1>
        {children}
        <form onSubmit={handleSubmit}>
          <label>
            <h1>Available times:</h1>
            <div>
              <TimeSlot
                className="TimeSlot"
                value="9am"
                currentTime={time}
                handleChange={handleChange}
                isAvailable={times.morning}
              />

              <TimeSlot
                className="TimeSlot"
                value="12pm"
                currentTime={time}
                handleChange={handleChange}
                isAvailable={times.mid}
              />
              <TimeSlot
                className="TimeSlot"
                value="4pm"
                currentTime={time}
                handleChange={handleChange}
                isAvailable={times.afternoon}
              />
            </div>
          </label>
          <input type="submit" value="Submit" className="Button-close" />
        </form>

        <button className="Button-close" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

const TimeSlot = ({
  value,
  currentTime,
  handleChange,
  isAvailable,
  className,
}) =>
  isAvailable && (
    <label className={className}>
      <input
        type="radio"
        value={value}
        checked={currentTime === value}
        onChange={handleChange}
      />
      {value}
    </label>
  );

export default Modal;
