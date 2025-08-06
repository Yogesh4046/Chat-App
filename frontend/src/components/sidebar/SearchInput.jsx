import {IoSearchSharp} from "react-icons/io5"
import { useState } from "react";
import toast from "react-hot-toast";
import { useConversation } from "../../zustand/useConversation.js";
import {useGetConversations} from "../../hooks/useGetConversations.js";

export const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};

	return (
		<form onSubmit={handleSubmit}className='flex items-center gap-2'>
			<input
				type='text'
				placeholder='Search…'
				className='input bg-black text-yellow-300 border border-yellow-400 rounded-full placeholder-yellow-400'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button
				type='submit'
				className='btn btn-circle bg-black border border-yellow-400 text-yellow-300 hover:text-yellow-500 hover:border-yellow-500'
			>
				<IoSearchSharp className='w-6 h-6' />
			</button>
		</form>
	);
};

