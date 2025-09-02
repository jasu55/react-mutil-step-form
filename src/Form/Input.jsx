export function Input({ placeholder, onChange, value, type, errors }) {
  return (
    <div>
      <input
        type={type}
        className={
          "border outline-[#0CA5E9] my-[8px] rounded-md text-[16px]  w-full text-[#8B8E95] p-[12px]" +
          `${errors ? " border-red-500" : " border-gray-600"}`
        }
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
