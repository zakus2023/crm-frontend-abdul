import React from "react";
import "./MessageHistory.css";

const MessageHistory = ({ msg }) => {
    console.log(msg)
  return (
    <div>
        {!msg && "There is no message history for this user"}
        {msg && msg.length > 0 && msg.map((row,i)=>(
            <div className="msg-history" key={i}>
            <div className="sender">
              <div className="sender-name">{row.sentBy}</div>
              <div className="sent-date">{row.date}</div>
            </div>
            <div className="message">{row.message}</div>
          </div>
        ))}
    </div>
  );
};

export default MessageHistory;
