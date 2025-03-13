import React, { useEffect, useState } from "react";
import axios from "axios";

const Detail = ({ selectedId }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const getSelectedItem = async () => {
      const res = await axios.get(
        `https://northwind.vercel.app/api/categories/${selectedId}`
      );
      setItem(res.data);
    };
    getSelectedItem();
  }, [selectedId]);

  return (
    <>
      {item && (
        <>
          <span>Id: {item.id}</span>
          <h3>Name:{item.name}</h3>
          <p>Description: {item.description}</p>
        </>
      )}
    </>
  );
};

export default Detail;
