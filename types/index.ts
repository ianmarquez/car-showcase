export interface CustomButtonProps {
  btnType?: "button" | "submit";
  disabled?: boolean;
  title: string;
  containerStyles: string;
  handleClick: () => void;
  textStyles?: string;
  rightIcon?: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface Car {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: "fwd" | "awd" | "rwd";
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: "a" | "m";
  year: number;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowmoreProps {
  isNext: boolean;
  pageNumber: number;
}
