import Menus from "./pages/Menus";
import { Routes, Route } from "react-router-dom";
import ModalDefault from "./components/ModalDefault";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import LogIn from "./components/ModalLogin";
import Wellcome from "./pages/WellCome";
import { useLocation } from "react-router-dom";
import BlogLight from "./pages/BlogLight";

function App() {
  const location = useLocation();
  return (
    <div className="w-full">
      <div
        className={
          location.pathname === "/wellcome"
            ? "hidden"
            : "sticky w-5/6 mx-auto top-5 block rounded-lg z-50"
        }
      >
        <Menus />
      </div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/blog" Component={Blogs} />
        <Route path="/blog/light" Component={BlogLight} />
        <Route path="/login" Component={LogIn} />
        <Route path="/wellcome" Component={Wellcome} />
      </Routes>
    </div>
  );
}

export default App;
