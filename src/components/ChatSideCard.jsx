import { useState } from "react";
import { CgCloseR } from "react-icons/cg";

const ChatSideCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickModal = () => {
    setIsOpen(true);
  };

  const onClickClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <li
        className="mb-2 truncate cursor-pointer hover:font-bold"
        onClick={onClickModal}
      >
        {question}
      </li>
      {isOpen && (
        <div className="fixed top-0 left-0 bg-black bg-opacity-20 w-full h-full z-10">
          <div className="bg-white rounded-xl flex flex-col fixed p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button onClick={onClickClose} className="self-end mb-4">
              <CgCloseR size={20} />
            </button>
            <div className="text-lg">Q. {question}</div>
            <div className="text-xl mt-2 text-semibold">A. {answer}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatSideCard;
