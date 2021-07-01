import { CryptoCurrency } from "../enums/crypto-currency.enum";

export interface CryptoCurrencyInterface {
  name: CryptoCurrency;
  provider: "coingecko" | "crypto-compare" | "storm-gain";
  value: number;
  lastUpdated?: string;
}
