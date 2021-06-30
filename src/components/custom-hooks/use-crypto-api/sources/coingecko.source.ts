import axios from "axios";
import { CryptoCurrencyInterface } from "../../../../interfaces/crypto-currency.interface";
import { CryptoCurrency } from "../../../../enums/crypto-currency.enum";
import moment from "moment/moment";

interface CoingeckoSourceResponse {
  current_price: number;
  last_updated: string;
}

export default async function CoingeckoSource(): Promise<
  CryptoCurrencyInterface[]
> {
  const { data } = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets",
    {
      params: {
        vs_currency: "usd",
        ids: "bitcoin,ethereum,ripple",
      },
    }
  );

  const [BTC, ETH, XRP] = data as CoingeckoSourceResponse[];

  return [
    {
      name: CryptoCurrency.BTC,
      value: BTC.current_price,
      lastUpdated: moment(BTC.last_updated).format("YYYY/MM/DD HH:mm:ss"),
    },
    {
      name: CryptoCurrency.ETH,
      value: ETH.current_price,
      lastUpdated: moment(ETH.last_updated).format("YYYY/MM/DD HH:mm:ss"),
    },
    {
      name: CryptoCurrency.XRP,
      value: XRP.current_price,
      lastUpdated: moment(XRP.last_updated).format("YYYY/MM/DD HH:mm:ss"),
    },
  ].map((currency) => ({ ...currency, provider: "coingecko" }));
}
