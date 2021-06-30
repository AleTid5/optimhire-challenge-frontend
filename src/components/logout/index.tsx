import Modal from "../modal";
import LogoutIcon from "../../assets/icons/logout.icon";
import { useState } from "react";
import { useAppContext } from "../../contexts/app.context";

export default function Logout() {
  const { logout } = useAppContext();
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <>
      <div className="grid grid-cols-3 gap-1 w-20">
        <div
          className="bg-red-400 w-6 h-6 rounded-full cursor-pointer"
          onClick={() => setIsModalOpened(true)}
        />
        <div
          className="bg-yellow-300 w-6 h-6 rounded-full cursor-pointer opacity-50"
          title="Disabled feature"
        />
        <div
          className="bg-green-300 w-6 h-6 rounded-full cursor-pointer opacity-50"
          title="Disabled feature"
        />
      </div>
      <Modal
        visible={isModalOpened}
        title="Are you sure you want to leave?"
        subtitle="Do you really want to logout from your account?"
        primaryButton={{
          title: "Logout",
          action: logout,
        }}
        secondaryButton={{
          title: "Cancel",
          action: () => setIsModalOpened(false),
        }}
        icon={<LogoutIcon size={50} />}
      />
    </>
  );
}
