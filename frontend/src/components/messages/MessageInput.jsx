import { BsSend } from "react-icons/bs";
import { useState } from "react";
import {useSendMessage} from "../../hooks/useSendMessage.js";

export const MessageInput = () => {

	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};


	return (
		<form className='px-4 my-3' onSubmit={handleSubmit}>
			<div className='w-full relative'>
				<input
					type='text'
					className='border border-yellow-400 text-sm rounded-lg block w-full p-2.5 bg-black text-yellow-300 pr-10'
					placeholder='Send a message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button
					type='submit'
					className='absolute inset-y-0 right-6 flex items-center text-yellow-400 hover:text-yellow-300'
				
				>
					{loading ? <div className='loading loading-spinner'></div> : <BsSend />}
				</button>
			</div>
		</form>
	);
};
