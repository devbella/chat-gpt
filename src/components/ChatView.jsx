import { useEffect, useRef } from "react";
import ChatCard from "./ChatCard";

const ChatView = ({ chatList }) => {
  const ulRef = useRef();

  useEffect(() => {
    ulRef.current.scrollTop = ulRef.current.scrollHeight;
  }, [chatList]);

  return (
    <div className="h-screen max-w-[560px] flex flex-col justify-end">
      <ul ref={ulRef} className="mb-24 overflow-y-auto">
        {chatList.length === 0
          ? "채팅이 없습니다."
          : chatList.map((v, i) => (
              <ChatCard key={i} answer={v.answer} question={v.question} />
            ))}
      </ul>
    </div>
  );
};

export default ChatView;
