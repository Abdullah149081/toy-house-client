import { useContext } from "react";
import { Outlet } from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";
import Footer from "../page/shared/Footer/Footer";
import Navbar from "../page/shared/Navbar/Navbar";
import { AuthContext } from "../providers/AuthProviders";

const Main = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col gap-8 justify-center items-center">
        <h2 className="text-4xl font-bold animate-ping">Toy House</h2>
        <GridLoader color="#ff8c9a" />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
