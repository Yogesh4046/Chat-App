import { MessageInput } from "./MessageInput.jsx";
import { Messages } from "./Messages.jsx";
import { TiMessages } from "react-icons/ti";
import { useConversation } from "../../zustand/useConversation.js";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext.jsx";

export const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col bg-black text-yellow-300 border-2 border-yellow-400 rounded-lg overflow-hidden h-full">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="px-4 py-2 border-b border-yellow-400">
            <span className="text-yellow-400">To:</span>
            <span className="font-bold text-yellow-300">{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const {authUser}= useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full bg-black border-yellow-400 border-2 rounded-lg text-yellow-300">
      <div className="px-4 text-center sm:text-lg md:text-xl font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl" />
      </div>
    </div>
  );
};
