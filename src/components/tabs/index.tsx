import { ReactNode, useState } from "react";

interface TabsProps {
  children: Array<ReactNode>;
  tabs: Array<string>;
  className?: string;
}

export default function Tabs({ children, className, tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className={`border-b-2 border-yellow-300 ${className}`}>
        <ul className="flex cursor-pointer">
          {tabs.map((tab, key) => (
            <li
              className={`py-1.5 px-6 bg-white rounded-t-xl ml-2 font-bold ${
                activeTab === key
                  ? "bg-yellow-300 text-gray-600"
                  : "bg-gray-100 text-gray-500 hover:bg-yellow-100"
              }`}
              key={key}
              onClick={() => setActiveTab(key)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
      {children[activeTab]}
    </>
  );
}
