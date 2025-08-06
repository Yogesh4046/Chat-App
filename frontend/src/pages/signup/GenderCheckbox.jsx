export const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex gap-6 mt-4 text-yellow-300">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
          <input
            type="radio"
            name="gender"
            className="radio border-yellow-400 checked:bg-yellow-400"
            checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
          />
          <span className="label-text text-yellow-300">Male</span>
        </label>
      </div>

      <div className="form-control">
        <label className={`label gap-2 cursor-pointer  ${selectedGender === "female" ? "selected" : ""}`}>
          <input
            type="radio"
            name="gender"
            className="radio border-yellow-400 checked:bg-yellow-400"
            checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")}
          />
          <span className="label-text text-yellow-300">Female</span>
        </label>
      </div>
    </div>

  );
};
