import Card from "../../components/card";
import Logout from "../../components/logout";
import withAuthenticatedLogin from "../../components/with-authenticated-login";
import Tabs from "../../components/tabs";
import CryptoCurrencyGrid from "./components/crypto-currency-grid";
import { CryptoCurrency } from "../../enums/crypto-currency.enum";
import useCryptoApi from "../../components/custom-hooks/use-crypto-api";
import { CryptoCurrencyProvider } from "./context/crypto-currency.context";
import CryptoCurrencyGridSkeleton from "./components/crypto-currency-grid/skeleton";

const Cryptocurrencies = () => {
  const [results, isLoading, error] = useCryptoApi();

  const cryptoCurrencies = [
    CryptoCurrency.BTC,
    CryptoCurrency.ETH,
    CryptoCurrency.XRP,
  ];

  return (
    <CryptoCurrencyProvider results={results}>
      <div className="flex items-center justify-center h-screen px-4">
        <Card>
          <Logout />
          <Tabs className="mt-6" tabs={cryptoCurrencies}>
            {cryptoCurrencies.map((cryptoCurrency, key) =>
              isLoading ? (
                <CryptoCurrencyGridSkeleton />
              ) : (
                <CryptoCurrencyGrid
                  cryptoCurrencyName={cryptoCurrency}
                  key={key}
                />
              )
            )}
          </Tabs>
        </Card>
      </div>
    </CryptoCurrencyProvider>
  );
};

export default withAuthenticatedLogin(Cryptocurrencies);
