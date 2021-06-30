import { ReactNode, useMemo } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  type?: "dark" | "lightGray";
}

const backgroundTypes = {
  dark: "bg-gray-700",
  lightGray: "bg-gray-500",
};

export default function Card({
  children,
  className,
  type = "dark",
}: CardProps) {
  const backgroundColor = useMemo(() => backgroundTypes[type], [type]);

  return (
    <div
      className={`relative w-full h-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl p-8 rounded-lg shadow-2xl ${backgroundColor} ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
