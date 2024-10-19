import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

/**
 * HeaderComponet
 *  - Logo
 *  - Nav Items
 *
 * Body
 *  - Search
 *  - ReastorantContainer
 *    - Restorant
 * Footer
 *  - Copy Right
 *  - Links
 *  - Address
 *  - Contacts
 *
 *
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
