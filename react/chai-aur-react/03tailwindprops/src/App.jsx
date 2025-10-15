import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: "hitesh",
    age: 24
  }

  let myArr = [1,2,3,4,5]; 
  return (
    <>
      <h1 className="bg-indigo-600 text-white p-4 mb-8 rounded-xl">
        Tailwind test
      </h1>
      <Card username="chaiaurcode" btnText="click me"/>
      <Card username="hitesh" btnText="visit me"/>
    </>
  );
}

export default App;
