import Card from "../../components/card";
import Logout from "../../components/logout";
import withAuthenticatedLogin from "../../components/with-authenticated-login";

const Cryptocurrencies = () => {
  return (
    <div className="flex items-center justify-center h-screen px-4">
      <Card>
        <Logout />

        <div className="flex justify-center"></div>
      </Card>
    </div>
  );
};

export default withAuthenticatedLogin(Cryptocurrencies);
