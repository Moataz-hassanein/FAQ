import { useState, useEffect } from "react";

import axios from "axios";
import Q_A from "./Components/Q_A";
import Loader from "./Components/Loader";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // fetching the data
  useEffect(() => {
    const fetchData = async () => {
      try {
        //Start loading
        setLoading(true);
        const result = await axios(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setData(result.data);
      } catch (err) {
        //Set error message
        setError("Error fetching data");
      } finally {
        //Stop loading
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="p-10  ">
      <h1 className="text-center text-3xl font-bold underline underline-offset-8 decoration-blue-700 text-slate-700">
        FAQs
      </h1>
      {!loading && !error && <Q_A data={data} />}
      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}
    </div>
  );
}

export default App;
