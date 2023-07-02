"use client";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { SearchManufacturer } from ".";

const SearchBarButton: React.FC<{ otherClasses: string }> = ({
  otherClasses,
}) => {
  return (
    <>
      <button type="submit" className={clsx(otherClasses, "ml-3 z-10")}>
        <Image
          src="/magnifying-glass.svg"
          alt="magnifying-glass"
          width={40}
          height={40}
          className="object-contain"
        />
      </button>
    </>
  );
};

const Searchbar: React.FC = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (manufacturer === "" && model === "") {
        return alert("Please fill in the search bar");
      }
      updateSearchParams(model, manufacturer);
    },
    [model, manufacturer]
  );

  const updateSearchParams = useCallback(
    (model: string, manufacturer: string) => {
      const searchParams = new URLSearchParams(window.location.search);
      if (model) {
        searchParams.set("model", model);
      } else {
        searchParams.delete("model");
      }

      if (manufacturer) {
        searchParams.set("manufacturer", manufacturer);
      } else {
        searchParams.delete("manufacturer");
      }

      const newPathName = `${
        window.location.pathname
      }?${searchParams.toString()}`;

      router.push(newPathName);
    },
    []
  );

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchBarButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car-model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => {
            setModel(e.target.value);
            console.log(e.target.value);
          }}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchBarButton otherClasses="sm:hidden" />
      </div>
      <SearchBarButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default Searchbar;
