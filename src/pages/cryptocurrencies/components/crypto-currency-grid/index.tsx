import Card from "../../../../components/card";
import { CryptoCurrency } from "../../../../enums/crypto-currency.enum";
import { useCryptoCurrencyContext } from "../../context/crypto-currency.context";
import { CryptoCurrencyInterface } from "../../../../interfaces/crypto-currency.interface";

interface CurrencyViewerProps {
  cryptoCurrencyName: CryptoCurrency;
}

export default function CryptoCurrencyGrid({
  cryptoCurrencyName,
}: CurrencyViewerProps) {
  const { results } = useCryptoCurrencyContext();

  const cryptoCurrencyProviders = results.map((provider) =>
    provider.filter(
      (cryptoCurrencyResult: CryptoCurrencyInterface) =>
        cryptoCurrencyResult.name === cryptoCurrencyName
    )
  );

  const getParsedCurrency = (value: number) => value.toLocaleString("es-MX");

  return (
    <div className="py-4 select-none">
      <div className="grid grid-cols-3 gap-4">
        {cryptoCurrencyProviders.map((cryptoCurrencyProvider, key) => {
          const [{ provider, value }] = cryptoCurrencyProvider;
          return (
            <Card type="lightGray" key={key} className="px-4 py-4">
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
