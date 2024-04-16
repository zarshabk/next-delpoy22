import React from "react";

const Loading = () => {
  return (
    <div className="h-[200px] w-full justify-center items-center">
      <div className="loader w-[80px] h-[80px] rounded-full border-b-4 border-green-500 rotate-3 ">
        Loading...
      </div>
    </div>
  );
};

export default Loading;
