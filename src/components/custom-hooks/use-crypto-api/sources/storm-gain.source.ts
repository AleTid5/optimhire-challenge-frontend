import axios from "axios";
import { CryptoCurrencyInterface } from "../../../../interfaces/crypto-currency.interface";
import { CryptoCurrency } from "../../../../enums/crypto-currency.enum";
import moment from "moment/moment";

type Currency = {
  last_price: string;
};

interface StormGainSourceResponse {
  BTC_USDT: Currency;
  ETH_USDT: Currency;
  XRP_USDT: Currency;
}

export default async function StormGainSource(): Promise<
  CryptoCurrencyInterface[]
> {
  const { data } = await axios.get(
    "https://public-api.stormgain.com/api/v1/ticker"
  );

  const { BTC_USDT, ETH_USDT, XRP_USDT } = data as StormGainSourceResponse;

  return [
    {
      name: CryptoCurrency.BTC,
      value: parseFloat(BTC_USDT.last_price),
      lastUpdated: moment(new Date()).format("YYYY/MM/DD HH:mm:ss"),
    },
    {
      name: CryptoCurrency.ETH,
      value: parseFloat(ETH_USDT.last_price),
      lastUpdated: moment(new Date()).format("YYYY/MM/DD HH:mm:ss"),
    },
    {
      name: CryptoCurrency.XRP,
      value: parseFloat(XRP_USDT.last_price),
      lastUpdated: moment(new Date()).format("YYYY/MM/DD HH:mm:ss"),
    },
  ].map((currency) => ({ ...currency, provider: "storm-gain" }));
}
