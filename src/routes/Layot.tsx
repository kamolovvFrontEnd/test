import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

const Layot = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default Layot;
