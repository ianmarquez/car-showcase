export interface CustomButtonProps {
  btnType: "button" | "submit";
  disabled?: boolean;
  title: string;
  containerStyles: string;
  handleClick: () => void;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
