import React, { useEffect, useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

// Importing styles
import "./styles/global.scss";

// Importing fonts
import "./assets/Fonts/Nunito/stylesheet.scss";
import "./assets/Fonts/Roboto/stylesheet.scss";

// Importing LogoLoader and LanguageProvider
import LogoLoader from "./components/LogoLoader/LogoLoader";
import { LanguageProvider } from "./context/LanguageProvider";

// Lazy load the App component
const App = lazy(() => import("./App"));

// Create a root instance
const root = ReactDOM.createRoot(document.getElementById("root"));

function RootComponent() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2500); // 2500

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <React.StrictMode>
      <LanguageProvider>
        <Router>
          <Suspense fallback={<LogoLoader />}>
            {showLoader ? <LogoLoader /> : <App />}
          </Suspense>
        </Router>
      </LanguageProvider>
    </React.StrictMode>
  );
}

// Render the RootComponent
root.render(<RootComponent />);
