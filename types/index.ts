export interface CustomButtonProps {
  btnType: "button" | "submit";
  disabled?: boolean;
  title: string;
  containerStyles: string;
  handleClick: () => void;
}
