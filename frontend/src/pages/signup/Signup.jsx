import { GenderCheckbox } from "./GenderCheckbox.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup.js";
export const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { loading, signup } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  }

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto h-screen bg-black">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md border-2 border-yellow-400 backdrop-blur-lg bg-transparent text-yellow-300">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Sign Up <span className="text-blue-300">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base text-yellow-300">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full h-10 px-3 bg-black border border-yellow-400 text-yellow-300 rounded"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base text-yellow-300">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full h-10 px-3 bg-black border border-yellow-400 text-yellow-300 rounded"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
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
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base text-yellow-300">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full h-10 px-3 bg-black border border-yellow-400 text-yellow-300 rounded"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

          <Link
            className="text-sm hover:underline hover:text-yellow-500 mt-2 inline-block"
            to={"/login"}
          >
            Already have an account?
          </Link>

          <div>
            <button
              type="submit"
              className="btn btn-block btn-sm mt-4 border border-yellow-400 text-yellow-300 bg-black hover:bg-yellow-400 hover:text-black transition"
              disabled={loading}>
              {loading ? <span className="loading loading-spinner  text-yellow-400"></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
