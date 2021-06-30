import { createContext, ReactNode, useContext } from "react";
import { CryptoCurrencyInterface } from "../../../interfaces/crypto-currency.interface";

interface CryptoCurrencyProviderProps {
  children: ReactNode;
  results: CryptoCurrencyInterface[][];
}

interface CryptoCurrencyContextInterface {
  results: CryptoCurrencyInterface[][];
}

const CryptoCurrencyContext = createContext({
  results: [],
} as CryptoCurrencyContextInterface);

const { Provider } = CryptoCurrencyContext;

export const CryptoCurrencyProvider = ({
  children,
  results,
}: CryptoCurrencyProviderProps) => {
  return <Provider value={{ results }}>{children}</Provider>;
};

export const useCryptoCurrencyContext = () => {
  const context = useContext(CryptoCurrencyContext);

  if (!context) {
    throw new Error(
      "useCryptoCurrencyContext must be used within a CryptoCurrencyProvider"
    );
  }

  return context;
};
