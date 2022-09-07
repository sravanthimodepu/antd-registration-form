import React , {useState} from 'react';
import { BsZoomIn , BsZoomOut } from 'react-icons/bs';
import {GrPowerReset} from 'react-icons/gr';

import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Pie, Button , SparkLine , OnboardingForm } from '../components';
import pdf  from '../data/pdf.jpg';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { earningData , SparklineAreaData , ecomPieChartData } from '../data/dummy';

import { useStateContext } from '../contexts/ContextProvider';
const InvestorOnboarding = () => {
  const {formData , setFormData} = useStateContext()
  console.log(formData)
  return (
        <div className='mt-12'>
          <div className="flex flex-wrap lg:flex-nowrap justify-evenly">
            
                  <div className='relative w-3/4 'style={{ maxHeight:'80vh' , maxWidth :'1275px' }}>
                  <div className="bg-gray-100  text-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl  h-screen p-2 m-3 overflow-y-auto " style={{ maxHeight:'900px' , maxWidth :'1275px' }}>
                 
                 <TransformWrapper className="relative" wheel={ {disabled : true}}  >
                 {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                     <>
                       <div className='flex gap-3 justify-center absolute z-20 top-5 bg-opacity-50 right-5 text-sm rounded-xl bg-slate-100'>
                         <button type='button' className=' p-1 text-gray-900 hover:drop-shadow-xl    '  style={{borderRadius : '100%' , border: '1px'}} onClick={() => zoomIn()}><BsZoomIn/></button>
                         <button type='button' className='p-1 text-gray-900 hover:drop-shadow-xl '  onClick={() => zoomOut()}><BsZoomOut/></button>
                         <button type='button' className='p-1 text-gray-900 hover:drop-shadow-xl underline'  onClick={() => resetTransform()}>Reset</button>
                       </div>
                         <TransformComponent>
                           <img  src={pdf} className= 'align-bottom h-full w-full	' alt="pdf"/>
                         </TransformComponent>
                     </>
             )}
                 </TransformWrapper>
                 </div>
                  </div>
                <div
                className = "gap-2 m-3 p-1  bg-black  text-white w-1/2 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl"  style={{ maxHeight:'900px' , maxWidth :'400px' }}>
                  <OnboardingForm/>
                </div> 
          </div>

        </div>
  )
}

export default InvestorOnboarding