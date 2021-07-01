import { useEffect, useState } from "react";
import axios from "axios";
import { Error } from "../../../enums/error.enum";

export default function UseMxnCurrency() {
  const [error, setError] = useState<Error | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [mxnCurrency, setMxnCurrency] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);

        const {
          data: {
            rates: { MXN, USD },
          },
        } = await axios.get("http://data.fixer.io/api/latest", {
          params: {
            access_key: "7cb238c0cb1f38b9eedec42a4aadc322",
            symbols: "USD,MXN",
          },
        });

        setMxnCurrency(USD / MXN);
      } catch (e) {
        setError(e);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);

  return [mxnCurrency, isFetching, error] as const;
}
