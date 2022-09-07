import React from 'react'

const FormButtons = ({handleClick , step , stepsArray}) => {
  return (
    <>
        
             {/* BackButton */}
             <button
             type='submit'
             onClick={()=>handleClick('back')} 
             className={
               ` bg-gray-300 text-slate-900 uppercase py-2 px-4 
               rounded-xl font-semibold cursor-pointer border-2 
               border-slate-300 hover:bg-slate-700 hover:text-white
                transition duration-200 ease-in-out
                 ${ step === 1 ? ' opacity-50 cursor-not-allowed': "" }`}
                 >
                   Back
             </button>
             <button
             type='submit'
             onClick={()=>handleClick('next')}
             className=
             {`bg-green-500 uppercase py-2 px-4 rounded-xl
             font-semibold cursor-pointer hover:bg-slate-700 
             hover:text-white transition duration-200 ease-in-out`}
             >
               {`${step === stepsArray.length -1 ? 'Submit': 'Next' }`}
             </button>
        </>
  )
}

export default FormButtons