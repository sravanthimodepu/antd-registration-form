import React from 'react'
import { useStateContext } from '../../contexts/ContextProvider';
import {Button} from 'antd'


const Success = ({handleClick, step, stepsArray}) => {
  const {formData , setFormData} = useStateContext()
  const dataString = JSON.stringify(formData)
  return (
    <>
      <h1>Data Sent Successfully</h1>
      <div
      className='flex gap-3'>
      <Button
              type='primary'
              onClick={()=>{ console.log(formData) ; alert(dataString) ; }}
              >
                Display Data
              </Button>
              <Button
              type='secondary'
              onClick={()=>handleClick('back')}
              >
                Back to form
              </Button>
      </div>
    </>
  )
}

export default Success