import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin.js";

export const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
	const { loading, login } = useLogin();
  const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};
  
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto h-screen bg-black">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md border-2 border-yellow-400 backdrop-blur-lg bg-transparent text-yellow-300">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Login<span className="text-blue-300"> Chat App</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base text-yellow-300">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full h-10 px-3 bg-black border border-yellow-400 text-yellow-300 rounded"
              value={username}
							onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base text-yellow-300">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full h-10 px-3 bg-black border border-yellow-400 text-yellow-300 rounded"
              value={password}
							onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            to={"/signup"}
            className="text-sm hover:underline hover:text-yellow-500 mt-2 inline-block"
          >
            Don&apos;t have an account?
          </Link>

          <div className="mt-4">
            <button
              type="submit"
              className="btn btn-block btn-sm border border-yellow-400 text-yellow-300 bg-black hover:bg-yellow-400 hover:text-black transition"
              disabled={loading}
              >
                {loading?<span className="loading loading-spinner"></span>:"Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
