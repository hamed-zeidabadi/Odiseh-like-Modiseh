import React, { useState } from "react";
import { MdClose, MdChatBubbleOutline, MdSend } from "react-icons/md";

const ChatBox = ({ close, open, isOpenHandler }) => {
  const [msg, setMsg] = useState([]);
  const [state, setstate] = useState("");
  const [send, setSend] = useState([]);

  const _handleSendMsg = () => {
    setstate("");
    setMsg(["متاسفانه پشتیبانی واقعی نیست :)"]);
    if (send.length >= 4) return setSend([]);
    if (state.length !== 0)
      return setSend((prevState) => [...prevState, state]);
    if (state.length === 0)
      return setSend((prevState) => [...prevState, "لطفا چیزی تایپ کنید !!"]);
  };

  const _handleInputChenge = (e) => {
    const value = e.target.value.toString();
    setstate([value]);
  };

  return (
    <>
      {isOpenHandler ? (
        <div className="chatbox">
          <div className="chatbox_icon">
            <MdClose onClick={() => close(false)} />
          </div>
          <div className="chatbox_items ">
            <p className="chatbox_items__text">پشتیبان سایت</p>

            <div className="chatbox_items_msg">
              {send.length !== 0
                ? send.map((msg) => (
                    <p className="chatbox_items_msg_send">{msg}</p>
                  ))
                : null}
              {msg.length !== 0
                ? msg.map((msg) => (
                    <p className="chatbox_items_msg_rec">{msg}</p>
                  ))
                : null}
            </div>
          </div>
          <div className="chatbox_input">
            <input
              required
              onChange={_handleInputChenge}
              type="text"
              value={state}
              name="msg"
              id="msg"
              placeholder="پیام ..."
            />
            <MdSend className="chatbox_input__icon" onClick={_handleSendMsg} />
          </div>
        </div>
      ) : (
        <div className="chatboxclose">
          <div className="chatboxclose_icon">
            <MdChatBubbleOutline onClick={() => open(true)} />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
