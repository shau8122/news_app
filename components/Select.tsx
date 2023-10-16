
interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}
const  Select:React.FC<SelectProps>=({ options, onChange, value })=> {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="block appearance-none w-full overflow-auto hide-scrollbar bg-white border border-gray-300 text-gray-700 py-2 px-4  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l5-6H5l5 6z" />
        </svg>
      </div>
    </div>
  );
}
export default Select;