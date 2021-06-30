import { createContext, useContext, useEffect, useState } from "react";
import {
  AppContextInterface,
  AppProviderInterface,
} from "../interfaces/app-context.interface";
import { UserInterface } from "../interfaces/user.interface";

const AppContext = createContext({
  user: null,
  isUserLogged: () => false,
  authenticate: (T: UserInterface) => {},
  logout: () => {},
} as AppContextInterface);

const { Provider } = AppContext;

export const AppProvider = ({ children }: AppProviderInterface) => {
  const [user, setUser] = useState<UserInterface | null>(null);

  const authenticate = (user: UserInterface) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const isUserLogged = () => localStorage.getItem("user") !== null;

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser !== null) {
      setUser(JSON.parse(savedUser) as UserInterface);
    }
  }, []);

  return (
    <Provider value={{ user, isUserLogged, authenticate, logout }}>
      {children}
    </Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }

  return context;
};
