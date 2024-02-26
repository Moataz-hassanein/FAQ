const ErrorMessage = ({ message }) => {
  return (
    <div className="text-3xl font-bold h-[80vh] flex justify-center items-center text-red-700">
      {message}
    </div>
  );
};

export default ErrorMessage;
