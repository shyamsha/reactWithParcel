import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

const AppLayout = () => {
  return (
    <div>
      <Header></Header>
    </div>
  );
};

const heading = React.createElement("h1", {}, "heading");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
