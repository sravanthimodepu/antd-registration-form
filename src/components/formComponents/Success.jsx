import React from 'react'
import { FormButtons} from './index'

const Success = ({handleClick, step, stepsArray}) => {
  return (
    <>
    <div>Success</div>
    <div className='flex justify-between gap-10'> 
            <FormButtons
            handleClick = {handleClick}
            step = {step}
            stepsArray = {stepsArray}/>
    </div>
    </>
  )
}

export default Success