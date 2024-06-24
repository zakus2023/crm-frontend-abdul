import React from "react";
import "./ChatBox.css";

const ChatBox = ({ handleChange, handleSubmit, message }) => {
  console.log(message);
  return (
    <div className="chbox">
      <form onSubmit={handleSubmit}>
        <textarea
          name="detail"
          id="detail"
          rows={5}
          value={message}
          onChange={handleChange}
        ></textarea>
        <button>Reply</button>
      </form>
    </div>
  );
};

export default ChatBox;
