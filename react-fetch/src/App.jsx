import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Detail from "./components/Detail";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://northwind.vercel.app/api/categories"
        );

        if (!response.ok) throw new Error("Something went wrong :(");

        const data = await response.json();
        if (data.Response === "False") throw new Error("Data not found");

        setData(data);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
        console.log("erroooor", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [error]);

  // Axios with useEffect
  // useEffect(() => {
  //   axios
  //     .get("https://northwind.vercel.app/api/categories")
  //     .then((data) => setData(data.data));
  // }, []);

  // Axios with async await
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setIsLoading(true);
  //       const response = await axios.get(
  //         "https://northwind.vercel.app/api/categories"
  //       );
  //       setData(response.data);
  //     } catch (err) {
  //       console.error(err.message);
  //       setError(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="main-wrapper">
      {/* {isLoading ? (
        <Loader />
      ) : (
        data.map((elem) => {
          return <li key={elem.id}>{elem.name}</li>;
        })
      )} */}
      <section>
        {isLoading && <Loader />}
        {!isLoading &&
          !error &&
          data.map((elem) => (
            <li key={elem.id} onClick={() => setSelectedId(elem.id)}>
              {elem.name}
            </li>
          ))}
        {error && <Error message={error} />}
      </section>
      {selectedId && (
        <section>
          <Detail selectedId={selectedId} />
        </section>
      )}
    </div>
  );
}
export default App;
