import { Outlet } from "react-router";
import { Footer, Header } from "../components";

export const Layout = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
