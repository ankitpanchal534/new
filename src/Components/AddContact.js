import React, { useState } from "react";
import "./AddContact.css";
export default function AddContact() {
  const [toggle, setToggle] = useState(false);
  const ShowBox = () => {
    return (
      <div className="content">
        <div className="box">
          <button onClick={() => setToggle(false)} className="close-btn">
            x
          </button>
          <form className="add-form">
            <p>Add Contact</p>
            <input placeholder="Name" />
            <input placeholder="Mobile Number" />
            <button className="etc-btn">Add</button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div>
      {toggle ? <ShowBox /> : ""}
      <button className="add-btn" onClick={() => setToggle(true)}>
        +
      </button>
    </div>
  );
}
