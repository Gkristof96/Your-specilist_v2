import style from "./Message.module.scss";
import { VscError } from "react-icons/vsc";

const Message = (props) => {
  return (
    <div className={`${style["message-container"]} ${style[`${props.type}`]}`}>
      <span className={`${style[`${props.type}`]} ${style[`${props.margin}`]}`}>
        {props.message}
      </span>
    </div>
  );
};

Message.defaultProps = {
  type: "standard",
  margin: "small",
};

export default Message;
