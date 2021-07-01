import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { CryptoCurrencyInterface } from "../../../interfaces/crypto-currency.interface";

interface CryptoCurrencyProviderProps {
  children: ReactNode;
  results: CryptoCurrencyInterface[][];
}

interface CryptoCurrencyContextInterface {
  results: CryptoCurrencyInterface[][];
  lastCryptoValues: CryptoCurrencyInterface[];
  updateLastCryptoValues: (cryptoCurrencies: CryptoCurrencyInterface[]) => void;
}

const CryptoCurrencyContext = createContext({
  results: [],
  lastCryptoValues: [],
  updateLastCryptoValues: () => {},
} as CryptoCurrencyContextInterface);

const { Provider } = CryptoCurrencyContext;

export const CryptoCurrencyProvider = ({
  children,
  results,
}: CryptoCurrencyProviderProps) => {
  const [cryptoCurrenciesProviders, setCryptoCurrenciesProviders] = useState<
    CryptoCurrencyInterface[][]
  >([]);
  const [lastCryptoValues, setLastCryptoValues] = useState<
    CryptoCurrencyInterface[]
  >([]);

  const updateLastCryptoValues = (
    cryptoCurrencies: CryptoCurrencyInterface[]
  ) => {
    setLastCryptoValues(cryptoCurrencies);
  };

  useEffect(() => {
    const mergedCryptoCurrenciesProviders = results.map((provider, key) => [
      ...provider,
      ...(cryptoCurrenciesProviders[key] ?? []),
    ]);

    setCryptoCurrenciesProviders(mergedCryptoCurrenciesProviders);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results]);

  return (
    <Provider
      value={{
        results: cryptoCurrenciesProviders,
        lastCryptoValues,
        updateLastCryptoValues,
      }}
    >
      {children}
    </Provider>
  );
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
