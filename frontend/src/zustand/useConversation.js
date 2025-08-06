import { create } from "zustand";

export const useConversation = create((set, get) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }),

  messages: [],
  setMessages: (messages) => set({ messages }),

  addMessage: (newMessage) => {
    const { selectedConversation, messages } = get();
    if (
      selectedConversation &&
      (newMessage.senderId === selectedConversation._id ||
        newMessage.receiverId === selectedConversation._id)
    ) {
      set({ messages: [...messages, newMessage] });
    }
  },
}));


// import { create } from "zustand";

// export const useConversation = create((set) => ({
// 	selectedConversation: null,
// 	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
// 	messages: [],
// 	setMessages: (messages) => set({ messages }),
// }));
