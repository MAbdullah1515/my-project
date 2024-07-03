import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Axios from "./pages/Axios";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Axios />
      </div>
    </>
  );
}

export default App;
