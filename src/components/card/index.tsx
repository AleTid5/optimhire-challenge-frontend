import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
}

export default function Card({
  children,
  className,
  backgroundColor = "bg-gray-700",
}: CardProps) {
  return (
    <div
      className={`relative w-full h-auto max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl p-8 rounded-lg shadow-2xl ${backgroundColor} ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
