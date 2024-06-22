import React from "react";
import "./NewTicketForm.css";

const NewTicketForm = ({ handleChange, handleSubmit, frmdata }) => {
  console.log(frmdata);
  return (
    <div>
      <div className="login-container">
        <h1 className="sigin">Create a ticket</h1>
        <form onSubmit={handleSubmit}>
          <div className="login-fields">
            <input
              type="subject"
              placeholder="Subject"
              id="subject"
              required
              value={frmdata.subject}
              onChange={handleChange}
              name="subject"
            />
            <div className="issuedate">
              <span>Detected on</span>
              <input
                name="addedOn"
                type="date"
                id="addedOn"
                required
                value={frmdata.addedOn}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="detail"
              rows={5}
              type="text"
              placeholder="Details"
              id="detail"
              required
              value={frmdata.detail}
              onChange={handleChange}
            />
          </div>
          <button>Submit ticket</button>
        </form>
      </div>
    </div>
  );
};

export default NewTicketForm;
