import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function Pagination({pageNo, handlePrev, handleNext}) {
  return (
    <div className='bg-blue-900 font-bold text-xl p-3 mt-6 text-white text-center flex justify-center'>
        <div onClick={handlePrev} className='px-8 hover:cursor-pointer'><ArrowBackIcon></ArrowBackIcon></div>
        <div>{pageNo}</div>
        <div onClick={handleNext} className='px-8 hover:cursor-pointer'><ArrowForwardIcon></ArrowForwardIcon></div>
    </div>
  )
}

export default Pagination
