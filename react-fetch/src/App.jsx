import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  // Unprefered way
  // fetch("https://northwind.vercel.app/api/categories")
  //   .then((res) => res.json())
  //   .then((data) => setData(data));

  // Fetch with useffect
  // useEffect(() => {
  //   fetch("https://northwind.vercel.app/api/categories")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  // Fetch with async await
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "https://northwind.vercel.app/api/categories"
  //     ).then((res) => res.json());
  //     setData(response);
  //   };

  //   fetchData();
  // }, []);

  // Axios with useEffect
  // useEffect(() => {
  //   axios
  //     .get("https://northwind.vercel.app/api/categories")
  //     .then((data) => setData(data.data));
  // }, []);

  // Axios with async await
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://northwind.vercel.app/api/categories"
      );
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {data.map((elem) => {
        return <li key={elem.id}>{elem.name}</li>;
      })}
    </>
  );
}

export default App;
