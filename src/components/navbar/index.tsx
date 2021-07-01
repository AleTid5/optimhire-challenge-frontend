import Logout from "../logout";
import UserInformation from "../user-information";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <Logout />
      <UserInformation />
    </div>
  );
}
