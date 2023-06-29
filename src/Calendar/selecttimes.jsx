import React from "react";
import "./Modal.css";
const SelectTime = ({
  handleChange,
  date,
  handleSubmit,
  children,
  time,
  times,
  handleClose,
}) => {
  return (
    <section className="modal-main">
      <h1>Date Selected For Scheduling {date.toLocaleDateString()}</h1>
      {children}
      <form onSubmit={handleSubmit}>
        <label>
          <h1>Available times:</h1>

          <h2> Select Arch</h2>

          <div className="TimeSlots">
            <ul>
              <li>
                <TimeSlot
                  className="TimeSlot"
                  value="9am"
                  currentTime={time}
                  handleChange={handleChange}
                  isAvailable={times.morning}
                />
              </li>
              <li>
                <TimeSlot
                  className="TimeSlot"
                  value="12pm"
                  currentTime={time}
                  handleChange={handleChange}
                  isAvailable={times.mid}
                />
              </li>
              <li>
                <TimeSlot
                  className="TimeSlot"
                  value="4pm"
                  currentTime={time}
                  handleChange={handleChange}
                  isAvailable={times.afternoon}
                />
              </li>
            </ul>
          </div>
        </label>
        <input type="submit" value="Next" className="Button-close" />
      </form>

      <button className="Button-close" onClick={handleClose}>
        Close
      </button>
    </section>
  );
};

const TimeSlot = ({
  value,
  currentTime,
  handleChange,
  isAvailable,
  className,
}) =>
  !isAvailable && (
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

export default SelectTime;
