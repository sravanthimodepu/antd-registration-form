import React from 'react'
import { FormButtons} from './index'

const OtherDetails = ({handleClick, step, stepsArray}) => {
  return (
    <>
    <div>OtherDetails</div>
    <div className='flex justify-between gap-10'> 
            <FormButtons
            handleClick = {handleClick}
            step = {step}
            stepsArray = {stepsArray}/>
    </div>
    </>
  )
}

export default OtherDetails