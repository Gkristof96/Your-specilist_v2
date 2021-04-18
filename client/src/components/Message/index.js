import React from "react";
import { VscError } from "react-icons/vsc";

const Message = ({ message, type, margin }) => {
  return (
    <div className="message-container">
      {type === "error" && <VscError className="icon" />}
      <span className={`${type} ${margin}`}>{message}</span>
    </div>
  );
};

Message.defaultProps = {
  type: "standard",
  margin: "small",
};

export default Message;
