import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from "../../context/GlobalState";
import { Home } from '../../components/Home/Home';

export const HomeApp = () => {
  const { articles, loading, error, getDocs } = useContext(GlobalContext);

  useEffect(() => {
    getDocs();
  }, []);

  return (
    <>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        articles.map((article, index) => (
          <Home key={index} data={article} />
        ))
      )}
    </>
  );
};
