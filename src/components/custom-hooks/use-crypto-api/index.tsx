import { useState } from "react";
import { Error } from "../../../enums/error.enum";
import { CryptoCurrencyInterface } from "../../../interfaces/crypto-currency.interface";
import CoingeckoSource from "./sources/coingecko.source";
import StormGainSource from "./sources/storm-gain.source";
import CryptoCompareSource from "./sources/crypto-compare.source";
import useInterval from "../use-interval";

export default function useCryptoApi() {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [results, setResults] = useState<CryptoCurrencyInterface[][]>([]);

  useInterval({
    callback: async () => {
      try {
        setError(null);

        const data = (await Promise.all([
          CoingeckoSource(),
          CryptoCompareSource(),
          StormGainSource(),
        ])) as CryptoCurrencyInterface[][];

        setResults(data);
      } catch (e) {
        setError(e);
      } finally {
        if (isLoading) {
          setIsLoading(false);
        }
      }
    },
    delay: 15000,
  });

  return [results, isLoading, error] as const;
}
