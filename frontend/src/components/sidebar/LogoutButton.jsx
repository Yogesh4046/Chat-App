import { BiLogOut } from "react-icons/bi";
import { useLogout } from "../../hooks/useLogout.js";

export const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 cursor-pointer text-yellow-400 hover:text-yellow-300 transition-colors"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner text-yellow-400"></span>
      )}
    </div>
  );
};
