import Card from "../../../../components/card";
import { CryptoCurrency } from "../../../../enums/crypto-currency.enum";
import { useCryptoCurrencyContext } from "../../context/crypto-currency.context";
import { CryptoCurrencyInterface } from "../../../../interfaces/crypto-currency.interface";
import { useEffect, useMemo } from "react";

interface CurrencyViewerProps {
  cryptoCurrencyName: CryptoCurrency;
}

export default function CryptoCurrencyGrid({
  cryptoCurrencyName,
}: CurrencyViewerProps) {
  const { results, updateLastCryptoValues } = useCryptoCurrencyContext();

  const cryptoCurrencyProviders = useMemo(
    () =>
      results.map((provider) =>
        provider.filter(
          (cryptoCurrencyResult: CryptoCurrencyInterface) =>
            cryptoCurrencyResult.name === cryptoCurrencyName
        )
      ),
    [cryptoCurrencyName, results]
  );

  const getParsedCurrency = (value: number) => value.toLocaleString("es-MX");

  useEffect(() => {
    updateLastCryptoValues(
      cryptoCurrencyProviders.map(
        ([{ provider, value, name, lastUpdated }]) => ({
          provider,
          value,
          name,
          lastUpdated,
        })
      ) as CryptoCurrencyInterface[]
    );
  }, [cryptoCurrencyProviders]);

  return (
    <div className="py-4 select-none">
      <div className="grid sm:grid-cols-3 gap-4">
        {cryptoCurrencyProviders.map((cryptoCurrencyProvider, key) => {
          const [{ provider, value }] = cryptoCurrencyProvider;
          return (
            <Card backgroundColor="bg-dark-500" key={key} className="px-4 py-4">
              <div className="text-yellow-300 font-bold text-2xl text-center">
                {getParsedCurrency(value)}
              </div>
              <div className="text-yellow-200 text-xs text-center uppercase">
                {provider}
              </div>
              <div className="w-full border border-yellow-400 my-4" />
              <div className="h-32 overflow-y-auto">
                {cryptoCurrencyProvider.map((cryptoCurrency, key) => (
                  <div
                    className="flex justify-between text-yellow-200 text-xs hover:text-yellow-400 cursor-pointer"
                    key={key}
                  >
                    <div>{cryptoCurrency.lastUpdated}</div>
                    <div>{getParsedCurrency(cryptoCurrency.value)}</div>
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
