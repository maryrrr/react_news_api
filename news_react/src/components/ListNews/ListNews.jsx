import React, { useState,useEffect } from "react";

export const ListNews = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData")) || [];
    setUserData(storedData);
  }, []);

  return (
    <div>
      <h3>News List</h3>
      {userData.map((data, index) => (
        <div key={index}>
          <h4>{data.title}</h4>
          <p>{data.description}</p>
        </div>
      ))}
    </div>
  );
}
