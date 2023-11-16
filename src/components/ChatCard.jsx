const ChatCard = ({ answer, question }) => {
  return (
    <li className="flex flex-col gap-4 mb-6">
      <div className="self-end bg-yellow-200 mx-4 p-2 rounded-md shadow-lg whitespace-pre-wrap">
        {question}
      </div>
      <div className="bg-purple-200 self-start mx-4 p-2 rounded-md shadow-lg whitespace-pre-wrap">
        {answer}
      </div>
    </li>
  );
};

export default ChatCard;
