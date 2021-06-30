import { useEffect, useRef } from "react";

interface UseIntervalProps {
  callback: () => void;
  delay: number;
}

interface CachedCallback {
  current: () => void;
}

export default function useInterval({ callback, delay }: UseIntervalProps) {
  const savedCallback = useRef() as CachedCallback;

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    tick();

    if (delay !== null) {
      let id = setInterval(tick, delay);

      return () => clearInterval(id);
    }
  }, [delay]);
}
