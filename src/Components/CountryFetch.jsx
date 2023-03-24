"use client";
import React, { useEffect, useState } from "react";

const CountryFetch = () => {
  const [country, setCountry] = useState("India");
  useEffect(() => {
    fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setCountry(data.country));
  }, []);

  return <div>{country}</div>;
};

export default CountryFetch;
