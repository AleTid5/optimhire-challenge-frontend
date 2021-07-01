import Card from "../../../../components/card";
import Input from "../../../../components/form/input";
import { useCryptoCurrencyContext } from "../../context/crypto-currency.context";
import { CryptoCurrencyInterface } from "../../../../interfaces/crypto-currency.interface";
import { useState } from "react";

export default function CurrencyConverter() {
  const { lastCryptoValues } = useCryptoCurrencyContext();
  const [value, setValue] = useState<number | undefined>(undefined);

  return (
    <Card className="mt-4" backgroundColor="bg-gray-600">
      <div className="text-gray-400 uppercase text-lg font-bold mb-2">
        Currency Converter
      </div>
      <div className="grid sm:grid-cols-4 gap-4">
        <Input value={value} onChange={setValue} title="MXN" type="number" />
        {value &&
          value > 0 &&
          lastCryptoValues.map(
            (lastCryptoValue: CryptoCurrencyInterface, key: number) => (
              <div key={key} className="w-full break-all sm:text-center">
                <div
                  className="text-gray-400 uppercase text-xs font-bold mb-1"
                  title={`CURRENT VALUE: ${lastCryptoValue.value.toString()}`}
                >
                  {lastCryptoValue.provider}
                </div>
                <div className="text-yellow-200 font-bold mt-3">
                  {(lastCryptoValue.value * value).toFixed(2)}
                </div>
              </div>
            )
          )}
      </div>
    </Card>
  );
}
