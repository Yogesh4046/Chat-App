import { useConversation } from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

export const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center rounded p-2 py-1 cursor-pointer border border-yellow-400 text-yellow-300
          ${isSelected ? "bg-yellow-100" : "bg-black hover:bg-yellow-600"}
        `}
        onClick={() => setSelectedConversation(conversation)}
      >
        {/* Avatar with yellow online indicator */}
        <div className="relative w-12 h-12">
          <img
            src={conversation.profilePic}
            alt="user avatar"
            className="w-12 h-12 rounded-full border-2 border-yellow-400"
          />
          {isOnline && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-400 border-2 border-black rounded-full"></span>
          )}
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-yellow-300">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};
