import React from 'react'
import { FormButtons} from './index'
import { useStateContext } from '../../contexts/ContextProvider';
import {Button} from 'antd'


const Success = ({handleClick, step, stepsArray}) => {
  const {formData , setFormData} = useStateContext()
  return (
    <>
      <h1>Data Sent Successfully</h1>
      <Button
              type='primary'
              onClick={()=>{ alert(formData.stringify())}}
              >
                Display Data
              </Button>
    </>
  )
}

export default Success