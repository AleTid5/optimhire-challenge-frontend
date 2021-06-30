import { createContext, useContext, useState } from "react";
import {
  AppContextInterface,
  AppProviderInterface,
} from "../interfaces/app-context.interface";
import { UserInterface } from "../interfaces/user.interface";

const AppContext = createContext({
  user: null,
  authenticate: (T: UserInterface) => {},
} as AppContextInterface);

const { Provider } = AppContext;

export const AppProvider = ({ children }: AppProviderInterface) => {
  const [user, setUser] = useState<UserInterface | null>(null);

  const authenticate = (user: UserInterface) => {
    setUser(user);
  };

  return <Provider value={{ user, authenticate }}>{children}</Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }

  return context;
};
