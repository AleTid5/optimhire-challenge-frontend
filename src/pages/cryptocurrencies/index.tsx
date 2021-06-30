import Card from "../../components/card";
import Logout from "../../components/logout";
import withAuthenticatedLogin from "../../components/with-authenticated-login";
import Tabs from "../../components/tabs";
import CryptoCurrencyGrid from "./components/crypto-currency-grid";
import { CryptoCurrency } from "../../enums/crypto-currency.enum";
import useCryptoApi from "../../components/custom-hooks/use-crypto-api";
import { CryptoCurrencyProvider } from "./context/crypto-currency.context";

const Cryptocurrencies = () => {
  const [results, isLoading, error] = useCryptoApi();

  return (
    <CryptoCurrencyProvider results={results}>
      <div className="flex items-center justify-center h-screen px-4">
        <Card>
          <Logout />
          <Tabs
            className="mt-6"
            tabs={[CryptoCurrency.BTC, CryptoCurrency.ETH, CryptoCurrency.XRP]}
          >
            <CryptoCurrencyGrid cryptoCurrency={CryptoCurrency.BTC} />
            <CryptoCurrencyGrid cryptoCurrency={CryptoCurrency.ETH} />
            <CryptoCurrencyGrid cryptoCurrency={CryptoCurrency.XRP} />
          </Tabs>
        </Card>
      </div>
    </CryptoCurrencyProvider>
  );
};

export default withAuthenticatedLogin(Cryptocurrencies);
