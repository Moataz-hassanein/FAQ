import { useState, useEffect } from "react";
import { fetchData } from "./apiCalls/apiCalls";
import Q_A from "./Components/Q_A";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData(setData);
  }, []);
  return (
    <div className="p-10 ">
      <h1 className="text-center text-3xl font-bold underline underline-offset-8 decoration-blue-700 text-slate-700">
        FAQs
      </h1>
      <Q_A data={data} />
    </div>
  );
}

export default App;
