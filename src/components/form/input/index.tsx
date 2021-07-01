import { Dispatch, SetStateAction } from "react";

interface InputProps {
  type?: string;
  title?: string;
  className?: string;
  value: any;
  onChange: Dispatch<SetStateAction<any>>;
}

export default function Input({
  className,
  type = "text",
  title,
  value,
  onChange,
}: InputProps) {
  return (
    <div className={className ?? ""}>
      {title && (
        <div className="text-gray-400 uppercase text-xs font-bold ml-3 mb-1">
          {title}
        </div>
      )}
      <input
        value={value}
        type={type}
        className="bg-gray-400 rounded-xl p-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
        onChange={({ target: { value: newValue } }) => onChange(newValue)}
        autoComplete="off"
      />
    </div>
  );
}
