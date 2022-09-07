import React from 'react'
import { FormButtons} from './index'

const BankDetails = ({handleClick, step, stepsArray}) => {
  return (
    <>
    <div>BankDetails</div>
    <div className='flex justify-between gap-10'> 
            <FormButtons
            handleClick = {handleClick}
            step = {step}
            stepsArray = {stepsArray}/>
    </div>
    </>
  )
}

export default BankDetails