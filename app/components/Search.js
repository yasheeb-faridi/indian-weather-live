"use client";
import React from "react";
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoAPIcityOptions } from "../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async () => {
    try {
      const response = await fetch(GEO_API_URL,  geoAPIcityOptions);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
    // const loadOptions = async (inputValue) => {
    //   try {
    //     const response = await fetch(
    //       `${GEO_API_URL}?namePrefix=${inputValue}`,
    //       geoAPIcityOptions
    //     );
    //     const result = await response.text();
    //     console.log(result);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city ..."
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
