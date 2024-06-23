import React from "react";
import "./ChatBox.css";

const ChatBox = ({ handleChange, handleSubmit,msg }) => {
  console.log(msg);
  return (
    <div className="chbox">
      <form onSubmit={handleSubmit}>
        <textarea
          name="detail"
          id="detail"
          rows={5}
          value={msg}
          onChange={handleChange}
        ></textarea>
        <button>Reply</button>
      </form>
    </div>
  );
};

export default ChatBox;
