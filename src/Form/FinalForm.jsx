import { Input } from "./Input";
import { motion } from "motion/react";
import { useState } from "react";

export function FinalForm({ setFormPage, setForm, form }) {
  const [errors, setErrors] = useState({});

  const handleContinue = () => {
    const newErrors = {};

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setFormPage("DoneForm");
    }
  };

  const handleBack = () => {
    setFormPage("ContactForm");
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { duration: 1.5 } }}
      className="p-8 rounded-md w-[480px]  bg-[#FFFFFF]"
    >
      <img
        className="w-[80px]"
        src="data:image/png;base64,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"
        alt="Description"
      />

      <h1 className="font-semibold text-[26px]">Join Us! &#128526;</h1>

      <p className="text-[#8E8E8E] text-[18px]">
        Please provide all current information accurately.
      </p>

      <h2 className="font-semibold text-[14px] mt-[28px]">
        Date of birth <span className="text-red-500">*</span>
      </h2>
      <Input
        type="date"
        className="border outline-[#0CA5E9] border-[#CBD5E1] my-[8px] rounded-md text-[16px] h- w-full text-[#8B8E95] p-[12px]"
        value={form.dateOfBirth}
        onChange={(e) => setForm({ ...form, dateOfBirth: e.target.value })}
      />

      <h2 className="font-semibold text-[14px] ">
        Profile image <span className="text-red-500">*</span>
      </h2>
      <div className="mt-[8px] w-full h-[180px] bg-[#7F7F800D] flex flex-col items-center justify-center ">
        <button>
          <img
            className="w-[40px] rounded-full"
            src="https://static.vecteezy.com/system/resources/previews/056/202/171/non_2x/add-image-or-photo-icon-vector.jpg"
          />
        </button>
        <p>Add image</p>
      </div>

      <div className="flex gap-4 mt-[50px]">
        <button
          onClick={handleBack}
          className="flex justify-center border border-[#CBD5E1] text-black text-[16px] items-center w-[128px] h-[44px] rounded-md mt-[30px] "
        >
          <img
            src="images/chevron_left.svg"
            className="w-6 h-6 mr-2"
            alt="Arrow icon"
          />
          Back
        </button>
        <button
          onClick={handleContinue}
          className="flex bg-black text-white text-[16px] items-center w-[280px] h-[44px] justify-center rounded-md mt-[30px] "
        >
          Continue 3/3
          <img
            src="images/chevron_right.svg"
            className="w-6 h-6"
            alt="Arrow icon"
          />
        </button>
      </div>
    </motion.div>
  );
}
