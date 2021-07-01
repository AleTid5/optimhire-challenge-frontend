import { useAppContext } from "../../contexts/app.context";
import UserIcon from "../../assets/icons/user.icon";
import Modal from "../modal";
import { useState } from "react";

export default function UserInformation() {
  const { user } = useAppContext();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-center">
        <div className="hidden sm:flex text-sm text-gray-400 capitalize">
          <div>{user?.name}</div>
          <div className="ml-1">{user?.lastname}</div>
        </div>
        <div
          className="ml-2 cursor-pointer"
          onClick={() => setIsModalVisible(true)}
        >
          <UserIcon />
        </div>
      </div>
      <Modal
        visible={isModalVisible}
        title="User Information"
        subtitle={
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center sm:col-span-2">
              <div className="text-lg font-bold capitalize">{user?.name}</div>
              <div className="text-lg font-bold capitalize ml-1">
                {user?.lastname}
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-sm">{user?.email}</div>
            </div>
            <div className="flex items-center">
              <div>Phone:</div>
              <div className="ml-1">{user?.phoneNumber}</div>
            </div>
          </div>
        }
        primaryButton={{
          title: "close",
          action: () => setIsModalVisible(false),
        }}
      />
    </>
  );
}
