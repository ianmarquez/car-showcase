"use client";
import React, { FormEvent, useCallback, useState } from "react";
import { SearchManufacturer } from ".";

const Searchbar: React.FC = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = useCallback((e: FormEvent) => {}, []);
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default Searchbar;
