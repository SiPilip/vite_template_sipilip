import { Outlet } from "react-router-dom";
import { memo } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const AppLayout = memo(() => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
});

AppLayout.displayName = AppLayout;

export default AppLayout;
