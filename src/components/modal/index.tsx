import { ReactNode } from "react";

interface ActionButton {
  title: string;
  action: () => void;
}

interface ModalProps {
  visible: boolean;
  title: ReactNode | string;
  primaryButton: ActionButton;
  secondaryButton?: ActionButton | null;
  subtitle?: ReactNode | string;
  icon?: any;
}

export default function Modal({
  visible,
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  icon,
}: ModalProps) {
  if (!visible) {
    return null;
  }

  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover px-4 sm:px-0"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-80 inset-0 z-0" />
      <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
        <div className="">
          <div className="text-center p-5 flex-auto justify-center">
            {icon && <div className="flex justify-center">{icon}</div>}
            <h2 className="text-xl font-bold py-4 ">{title}</h2>
            {subtitle && (
              <p className="text-sm text-gray-500 px-8">{subtitle}</p>
            )}
          </div>
          <div className="p-3  mt-2 text-center space-x-4 md:block">
            {secondaryButton && (
              <button
                className="mb-2 md:mb-0 bg-white px-5 py-2 text-xs shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 uppercase"
                onClick={secondaryButton.action}
              >
                {secondaryButton.title}
              </button>
            )}
            <button
              className="mb-2 md:mb-0 bg-yellow-400 border border-yellow-400 px-5 py-2 text-xs shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-yellow-500 uppercase"
              onClick={primaryButton.action}
            >
              {primaryButton.title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
