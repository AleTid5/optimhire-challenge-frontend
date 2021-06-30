import { useEffect, useState } from "react";
import { Error } from "../../../enums/error.enum";
import { CryptoCurrencyInterface } from "../../../interfaces/crypto-currency.interface";
import CoingeckoSource from "./sources/coingecko.source";
import StormGainSource from "./sources/storm-gain.source";
import CryptoCompareSource from "./sources/crypto-compare.source";

export default function useCryptoApi() {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<CryptoCurrencyInterface[][]>([]);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        setError(null);

        const data = (await Promise.all([
          CoingeckoSource(),
          CryptoCompareSource(),
          StormGainSource(),
        ])) as CryptoCurrencyInterface[][];

        setResults(
          data.map((provider, key) => [...provider, ...(results[key] ?? [])])
        );
      } catch (e) {
        setError(e);
      } finally {
        if (isLoading) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    // setInterval(fetchData, 15000);
  }, []);

  return [results, isLoading, error] as const;
}
