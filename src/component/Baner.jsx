import React from "react";

function Baner() {
  return (
    <div
      className="h-[20vh] md:h-[80vh] bg-cover bg-center flex flex-col justify-end"
      style={{
        backgroundImage:
          "url(https://collider.com/wp-content/uploads/avengers-character-poster-banner.jpeg)",
      }}
    >
      <div className="text-white text-2xl font-serif font-bold bg-blue-900/80 text-center p-2 ">Endgame</div>
    </div>
  );
}

export default Baner;
