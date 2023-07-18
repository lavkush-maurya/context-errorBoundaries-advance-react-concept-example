import React from "react";
import ParentErrorComponent from "./components/error/ParentErrorComponent";
import ParentContext from "./components/context/ParentContext";

const App = () => {
  return (
    <div>
      {/* context wala👇 */}
      {/* <ParentContext /> */}
      {/* context wala  */}

      {/* -----error boudary👇 ----- */}
      {/* <ParentErrorComponent /> */}
    </div>
  );
};

export default App;
