import React from 'react'
import { FormButtons} from './index'
const Nomination = ({handleClick, step, stepsArray}) => {
  return (
    <>
    <div>Nomination</div>
    <div className='flex justify-between gap-10'> 
            <FormButtons
            handleClick = {handleClick}
            step = {step}
            stepsArray = {stepsArray}/>
    </div>
    </>
  )
}

export default Nomination