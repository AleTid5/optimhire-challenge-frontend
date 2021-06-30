import { FunctionComponent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../contexts/app.context";

const withAuthenticatedLogin =
  (Component: FunctionComponent) => (props: any) => {
    const history = useHistory();
    const { user, isUserLogged } = useAppContext();

    useEffect(() => {
      if (!isUserLogged()) {
        history.push("/login");
      }
    }, [history, isUserLogged, user]);

    return <Component {...props} />;
  };

export default withAuthenticatedLogin;
