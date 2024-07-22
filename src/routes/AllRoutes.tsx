import { Route, Routes } from "react-router-dom";
import Test from "../components/Test";
import Layot from "./Layot";
import MainPage from "../components/MainPage";
import Result from "../components/Result";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layot />}>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="test" element={<Test />}></Route>
          <Route path="result" element={<Result />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default AllRoutes;
