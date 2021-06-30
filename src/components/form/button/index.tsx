interface ButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "button";
  size?: "full" | number;
}

export default function Button({
  className,
  title,
  onClick,
  type = "button",
  size = "full",
}: ButtonProps) {
  return (
    <button
      className={`bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 py-3 rounded-lg text-gray-600 font-bold uppercase mt-8 ${className} w-${size}`}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
}
