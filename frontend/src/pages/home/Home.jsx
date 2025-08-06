import {Sidebar} from "../../components/sidebar/Sidebar.jsx";
import {MessageContainer} from "../../components/messages/MessageContainer.jsx";
export const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 text-yellow-300 border-2 border-yellow-400'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}
