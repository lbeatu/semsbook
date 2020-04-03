import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import İmageUpload from "./src/İmageupload";
import "react-datepicker/dist/react-datepicker.css";

const Write = () => {
  //const createPost []
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="write-container">
      <div className="write-content">
        <label>Content:</label>
        <input
          type="text"
          id="content"
          name="content"
          placeholder="Travel,Entertaiment.."
        ></input>
        <div className="datepick">
          <label>Date:</label>
          <DatePicker
            showPopperArrow={false}
            selected={startDate}
            onChange={date => setStartDate(date)}
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>
      </div>
      <div className="write-content">
        <label>İmage: </label>
        <İmageUpload />

        <label>Context:</label>
        <textarea
          type="text"
          id="Context"
          name="Context"
          placeholder="Context"
        ></textarea>
      </div>
      <div className="write-content">
        <label>Creator:</label>
        <input
          type="text"
          id="Context"
          name="Context"
          placeholder="Context"
        ></input>
        <button type="submit">Publish This</button>
      </div>
    </div>
  );
};

export default Write;
