import { SlArrowDown } from "react-icons/sl";

const Q_AItem = ({ id, title, body, curOpen, onOpen }) => {
  // checking if the current item is open
  const isOpen = curOpen === id;
  // handling the toggle button
  const handleToggle = () => {
    onOpen(isOpen ? null : id);
  };
  return (
    <div className="m-auto w-full my-5 lg:w-2/3 " key={id}>
      <div
        className="bg-slate-100 p-5 flex justify-between cursor-pointer shadow hover:shadow-md transition-shadow duration-300 ease-in-out rounded-md"
        onClick={handleToggle}>
        <h2
          className={`text-xs sm:text-sm lg:text-xl font-bold ${
            isOpen && "text-blue-700"
          }`}>
          {id}- {title}
        </h2>
        <SlArrowDown
          className={`shrink-0 text-2xl ${
            isOpen && " scale-[-1]"
          } transition-transform duration-300 ease-in-out`}
        />
      </div>
      <p
        className={`p-5 shadow-inner rounded-md text-xs sm:text-sm lg:text-base ${
          isOpen ? "block" : "hidden"
        }  `}>
        {body}
      </p>
    </div>
  );
};

export default Q_AItem;
