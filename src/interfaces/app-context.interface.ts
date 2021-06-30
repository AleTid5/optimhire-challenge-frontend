import { ReactNode } from "react";
import { UserInterface } from "./user.interface";

export interface AppProviderInterface {
  children: ReactNode;
}

export interface AppContextInterface {
  user: UserInterface | null;
  authenticate: (user: UserInterface) => void;
}
