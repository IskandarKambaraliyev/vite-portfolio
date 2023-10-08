import { useEffect } from "react";

import { Outlet, useLocation } from "react-router-dom";

import { Navbar, Footer } from "./container";

function ScrollToTop() {
  const { pathname } = useLocation();

  // This effect will run whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]);

  return null; // This component doesn't render anything
}

const Layout = () => {
  return (
    <div className="layout">
      <ScrollToTop />
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
