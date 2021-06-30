import { ReactNode } from "react";
import { UserInterface } from "./user.interface";

export interface AppProviderInterface {
  children: ReactNode;
}

export interface AppContextInterface {
  user: UserInterface | null;
  isUserLogged: () => boolean;
  authenticate: (user: UserInterface) => void;
  logout: () => void;
}
