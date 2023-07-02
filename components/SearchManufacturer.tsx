"use client";

import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useCallback, useMemo, useState } from "react";
import { manufacturers } from "@/constants";
import clsx from "clsx";

const SearchManufacturer: React.FC<SearchManufacturerProps> = ({
  manufacturer,
  setManufacturer,
}) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers = useMemo(() => {
    if (query === "") {
      return manufacturers;
    }
    return manufacturers.filter((item) =>
      item
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g, ""))
    );
  }, [query]);

  const renderComboBoxOptions = useCallback(() => {
    return filteredManufacturers.map((manufacturer) => (
      <>
        <Combobox.Option
          value={manufacturer}
          key={manufacturer}
          className={({ active }) =>
            `relative search-manufacturer__option ${
              active ? "bg-primary-blue text-white" : "text-gray-900"
            }`
          }
        >
          {({ selected, active }) => (
            <>
              <span
                className={clsx(
                  "block truncate",
                  selected ? "font-medium" : "font-normal"
                )}
              >
                {manufacturer}
              </span>
              {selected && (
                <span
                  className={clsx(
                    "absolute inset-y-0 left-0 flex items-center pl-3",
                    active ? "text-white" : "text-pribg-primary-purple"
                  )}
                />
              )}
            </>
          )}
        </Combobox.Option>
      </>
    ));
  }, [filteredManufacturers]);

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>{renderComboBoxOptions()}</Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
