import React from "react";

function MovieCard({ posterPath, title, handleAddWatchlist, movObj, removeFromWatchlist, watchlists }) {

  function isWatchList(movObj) {
    for(let i=0; i<watchlists.length; i++){
      if(watchlists[i].id == movObj.id){
        return true
      }
    }
    return false
    
  }

  return (
    <>
      <div
        className="h-[50vh] w-[200px] relative flex flex-col items-end mt-5 bg-center bg-cover rounded-xl ml-3 hover:scale-110 duration-300 hover:cursor-pointer"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${posterPath})`,
        }}
      >
        {isWatchList(movObj) ? <div onClick={() => removeFromWatchlist(movObj)} className="flex justify-center m-2 h-7 w-8  rounded-lg bg-gray-900/60">  &#10084; </div> :<div onClick={() => handleAddWatchlist(movObj)} className="flex justify-center m-2 h-7 w-8  rounded-lg bg-gray-900/60"> &#129293; </div>}
        <div className="text-white bottom-0 w-full mb-0.5 gap-3 absolute text-center text-xl bg-gray-900/50">
          {title}
        </div>
      </div>
      {/* <div className='h-[50vh] w-[200px] bg-center bg-cover rounded-xl ml-3 hover:scale-110 duration-300 hover:cursor-pointer' style={{backgroundImage : ('url(https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICA0LjFLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00447951-kdzpgwsjte-portrait.jpg)')}}></div>
    <div className='h-[50vh] w-[200px] bg-center bg-cover rounded-xl ml-3 hover:scale-110 duration-300 hover:cursor-pointer' style={{backgroundImage : ('url(https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NUsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00438859-mfhfzugkfc-portrait.jpg)')}}></div>
    <div className='h-[50vh] w-[200px] bg-center bg-cover rounded-xl ml-3 hover:scale-110 duration-300 hover:cursor-pointer' style={{backgroundImage : ('url(https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS44LzEwICAyMTQgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end:l-text,ie-UFJPTU9URUQ%3D,co-FFFFFF,bg-DC354B,ff-Roboto,fs-20,lx-N16,ly-12,lfo-top_right,pa-12_14_12_14,r-6,l-end/et00440977-jlzhhfkakw-portrait.jpg)')}}></div>
    <div className='h-[50vh] w-[200px] bg-center bg-cover rounded-xl ml-3 hover:scale-110 duration-300 hover:cursor-pointer' style={{backgroundImage : ('url(https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny41LzEwICA1Mi41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00432498-tgbdztungl-portrait.jpg)')}}></div>
    <div className='h-[50vh] w-[200px] bg-center bg-cover rounded-xl ml-3 hover:scale-110 duration-300 hover:cursor-pointer' style={{backgroundImage : ('url(https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAyMiBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00067248-pxgbegywpw-portrait.jpg)')}}></div> */}
    </>
  );
}

export default MovieCard;
