import { ReactNode } from "react";

export default function Background({ children }: { children: ReactNode }) {
  return <div className="bg-yellow-100 w-full min-h-screen">{children}</div>;
}
