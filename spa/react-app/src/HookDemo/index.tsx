import { useEffect, useRef, useState } from "react";

const HookDemo = () => {
  const [count, setCount] = useState<number | null>(0);
  const [flag, setFlag] = useState(false);
  const cacheRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof count === "number") {
      cacheRef.current = count;
    }
  }, [count]);

  useEffect(() => {
    console.log("enter");
    return () => {
      console.log("destoy");
    };
  }, [flag]);
  return (
    <div>
      <div>count:{count}</div>
      <div>cacheCount:{cacheRef.current}</div>
      <button onClick={() => setCount(Number(count) + 1)}>add</button>
      <button onClick={() => setFlag(!flag)}>trigger destroy</button>
      <button onClick={() => setCount(null)}>set count error</button>
    </div>
  );
};

export default HookDemo;
