import { useSelector } from "react-redux";

interface MenuProps {
  reducer: {
    menu: boolean;
    isChecked: boolean;
  };
}

export const useDataSelector = () =>
  useSelector((state: MenuProps) => state.reducer);
