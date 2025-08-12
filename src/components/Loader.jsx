import React from "react";

function Loader() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <span className="loading loading-spinner text-primary loading-lg" style={{ width: "90px"}}></span>
    </div>
  )
}

export default Loader;
