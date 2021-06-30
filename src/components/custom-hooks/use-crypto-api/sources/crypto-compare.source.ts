import axios from "axios";
import { CryptoCurrencyInterface } from "../../../../interfaces/crypto-currency.interface";
import { CryptoCurrency } from "../../../../enums/crypto-currency.enum";
import moment from "moment/moment";

type Currency = {
  USD: number;
};

interface CryptoCompareSourceResponse {
  BTC: Currency;
  ETH: Currency;
  XRP: Currency;
}

export default async function CryptoCompareSource(): Promise<
  CryptoCurrencyInterface[]
> {
  const { data } = await axios.get(
    "https://min-api.cryptocompare.com/data/pricemulti",
    {
      params: {
        tsyms: "USD",
        fsyms: "BTC,ETH,XRP",
      },
    }
  );

  const { BTC, ETH, XRP } = data as CryptoCompareSourceResponse;

  return [
    {
      name: CryptoCurrency.BTC,
      value: BTC.USD,
      lastUpdated: moment(new Date()).format("YYYY/MM/DD HH:mm:ss"),
    },
    {
      name: CryptoCurrency.ETH,
      value: ETH.USD,
      lastUpdated: moment(new Date()).format("YYYY/MM/DD HH:mm:ss"),
    },
    {
      name: CryptoCurrency.XRP,
      value: XRP.USD,
      lastUpdated: moment(new Date()).format("YYYY/MM/DD HH:mm:ss"),
    },
  ].map((currency) => ({ ...currency, provider: "crypto-compare" }));
}
