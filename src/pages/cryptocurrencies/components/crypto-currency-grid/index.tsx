import Card from "../../../../components/card";
import { CryptoCurrency } from "../../../../enums/crypto-currency.enum";
import { useCryptoCurrencyContext } from "../../context/crypto-currency.context";
import { CryptoCurrencyInterface } from "../../../../interfaces/crypto-currency.interface";

interface CurrencyViewerProps {
  cryptoCurrency: CryptoCurrency;
}

export default function CryptoCurrencyGrid({
  cryptoCurrency,
}: CurrencyViewerProps) {
  const { results } = useCryptoCurrencyContext();

  const cryptoCurrencyProviders = results.map((provider) =>
    provider.filter(
      (cryptoCurrencyResult: CryptoCurrencyInterface) =>
        cryptoCurrencyResult.name === cryptoCurrency
    )
  );

  const getParsedCurrency = (value: number) => value.toLocaleString("es-MX");

  return (
    <div className="py-4">
      <div className="grid grid-cols-3 gap-4">
        {cryptoCurrencyProviders.map((cryptoCurrencyProvider, key) => {
          const [{ provider, value }] = cryptoCurrencyProvider;
          return (
            <Card type="lightGray" key={key}>
              <div className="text-yellow-300 font-bold text-2xl text-center">
                {getParsedCurrency(value)}
              </div>
              <div className="text-yellow-200 text-xs text-center uppercase">
                {provider}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
