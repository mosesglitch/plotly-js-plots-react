import React from "react";
import { useState, useEffect } from "react";
// import Bar from "./components/Bar";
// import Pie from "./components/Pie";
const App = () => {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetch("/members")
      .then((res) => {
        console.log(res);
        res.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      Holla
      {/* <Bar />
      <Pie /> */}
    </div>
  );
};
export default App;
