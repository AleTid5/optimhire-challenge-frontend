import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`relative w-full h-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl p-8 bg-gray-700 rounded-lg shadow-2xl ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
