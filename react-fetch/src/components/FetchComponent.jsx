import { useEffect, useRef, useState } from "react";

const FetchComponent = () => {
  const [data, setData] = useState(null);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    fetch("https://northwind.vercel.app/api/categories")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted.current) setData(data);
      });

    return () => {
      isMounted.current = false;
    };
  }, []);

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
};

export default FetchComponent;
