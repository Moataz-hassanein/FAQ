import { useState } from "react";
import Q_AItem from "./Q_AItem";
import Loader from "./Loader";

const Q_A = ({ data }) => {
  const [curOpen, setCurOpen] = useState(null);
  const [page, setPage] = useState(1);
  // the last userId in the data
  const last = data[data.length - 1]?.userId;
  // handling the load more button
  const handlePages = () => {
    if (page === last) return;
    setPage((prevPage) => prevPage + 1);
  };
  // handling the show less button
  const handleHide = () => {
    setPage(1);
    setCurOpen(null);
  };
  // filtering the data based on the page
  const selectedData = data.filter((item) => item.userId <= page);

  return (
    <>
      <div className="text-slate-700">
        {selectedData.map((item) => (
          <Q_AItem
            key={item.id}
            id={item.id}
            title={item.title}
            body={item.body}
            curOpen={curOpen}
            onOpen={setCurOpen}
          />
        ))}
      </div>

      <div className="flex justify-evenly">
        {!(page === last) && (
          <button
            className="bg-blue-700 p-2 rounded-md text-white"
            onClick={handlePages}>
            Load more
          </button>
        )}
        {page > 1 && (
          <button
            className="bg-blue-700 p-2 rounded-md text-white"
            onClick={handleHide}>
            Show less
          </button>
        )}
      </div>
    </>
  );
};

export default Q_A;
