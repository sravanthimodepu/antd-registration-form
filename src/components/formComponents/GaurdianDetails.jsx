import React  , {useState}from 'react'
import {BsGenderAmbiguous} from "react-icons/bs"
import {BsPerson} from "react-icons/bs";
import {BsPersonPlus} from "react-icons/bs";
import {BsCardText} from  "react-icons/bs";
import {ImProfile} from "react-icons/im";
import {FaIdCard} from "react-icons/fa";
import { useStateContext } from '../../contexts/ContextProvider';
import {Form , Button , Select , DatePicker , Switch ,Input} from 'antd';
import {FormButtons} from './index'
import * as moment from 'moment';

const GaurdianDetails = ({handleClick , step , stepsArray}) => {
  const {formData , setFormData} = useStateContext()
  const [form] = Form.useForm();
  const onFinish = () => {
    handleClick('next');
   }

   const guardianDetails = formData.guardianDetails;


  return (
    <>
      <Form
        form={form}
        name="guardianDetails"
        onFinish={onFinish}
        autoComplete="off"
        className=' flex flex-col justify-center items-center w-full gap-0.5 h-full text-white'
        initialValues = {
          {
            guardianDetails_name : formData.guardianDetails.name || null,
            guardianDetails_pan : formData.guardianDetails.pan || null,
            guardianDetails_minorDob : formData.guardianDetails.minorDob ? moment(formData.guardianDetails.minorDob, 'DD-MM-YYYY') : null,
            guardianDetails_dobAttached : formData.guardianDetails.dobAttached || null,
            guardianDetails_guardianRelation : formData.guardianDetails.guardianRelation || null,
          }
        }
        >
          <Form.Item
          className='relative w-full'
          name='guardianDetails_name'
          rules={[
            {
              required: true,
             },
             {
              min: 3,
              message: 'Minimum 3 characters required',
             },
             {
             max: 30,
             message: 'Maximum 30 characters allowed', 
            },
            {
             pattern: /^[a-zA-Z 0-9 -]*$/,
             message: "Special Characters Not Allowed except '-' ",
           }
          ]}
          >
            <Input
          prefix = {<BsPerson className=' text-green-500 text-xl'/>}	
          size='large'
          placeholder = "Gaurdian Name"
          onChange={(e) => {guardianDetails.name = e.target.value}}
          allowClear
          />

          </Form.Item>
          <Form.Item
           className='relative w-full'
           name='guardianDetails_pan'
           
           rules={[
             {
               required: true,
               message: 'Please input your PAN!',
               
             },
             {
              pattern: /^[a-zA-Z]{3}[p|P|c|C|h|H|f|F|a|A|t|T|b|B|l|L|j|J|g|G][A-Za-z][\d]{4}[A-Za-z]$/,
              message: 'Invalid PAN',
             }
           ]}
          >
          <Input
          prefix = {<FaIdCard className=' text-green-500 text-xl'/>}	
          size='large'
          placeholder = "Pan Number"
          onChange={(e) => {guardianDetails.pan = e.target.value.toUpperCase() ;}}
          allowClear
          />
          </Form.Item>
         
          <Form.Item
          label={<p className=' relative right-0  text-black text-center p-4 pr-1 pl-0 border rounded mt-6 bg-white text-base'>Minor Date Of Birth:</p>}
          className='relative w-full'
          name='guardianDetails_minorDob'
          rules={[
            {
              required: true,
            }
          ]}
          hasFeedback
          >
            <DatePicker
            onChange={(e)=>{guardianDetails.minorDob =  moment(e).format('DD-MM-YYYY').toString() ;}}
            format='DD/MM/YYYY'
            size='large'/>
          </Form.Item>

          <Form.Item
          className='relative w-full'
          label={<p className=' relative right-0  text-black text-center p-4 pr-1 pl-0 border rounded mt-6 bg-white text-base'>Minor DoB Attached?:</p>}

          name='guardianDetails_dobAttached'
          >
               <Switch
               onChange={(e)=>{guardianDetails.dobAttached = e}}
               checkedChildren="Yes" unCheckedChildren="No"  />
          

          </Form.Item>

          <Form.Item
        className='relative w-full'
        name='guardianDetails_guardianRelation'
        rules={[
          {
            required: true,
            
          },
        ]}>
          <Select
          optionLabelProp='label'
          allowClear
          showSearch
          placeholder = {<div className='flex gap-1 justify-start'>
          <BsPersonPlus className=' text-green-500 text-xl mt-3 '/>
          <span>Gaurdian Relationship</span>
          </div>
          }
          size='large'
          onChange={(value) => { guardianDetails.guardianRelation = value}}>
            <Select.Option label = {<div className='flex gap-1 justify-start'>
                                     <BsPersonPlus className=' text-green-500 text-xl mt-3 '/>
                                    <span>Father</span>
                                    </div>}
          value="Father">Father</Select.Option>
            <Select.Option label = {<div className='flex gap-1 justify-start'>
                                     <BsPersonPlus className=' text-green-500 text-xl mt-3 '/>
                                    <span>Mother</span>
                                    </div>}
            value="Mother">Mother</Select.Option>
            <Select.Option label = {<div className='flex gap-1 justify-start'>
                                     <BsPersonPlus className=' text-green-500 text-xl mt-3 '/>
                                    <span>Brother</span>
                                    </div>}
            value="Brother">Brother</Select.Option>
            <Select.Option label = {<div className='flex gap-1 justify-start'>
                                     <BsPersonPlus className=' text-green-500 text-xl mt-3 '/>
                                    <span>Sister</span>
                                    </div>}
            value="Sister">Sister</Select.Option>
            <Select.Option label = {<div className='flex gap-1 justify-start'>
                                     <BsPersonPlus className=' text-green-500 text-xl mt-3 '/>
                                    <span>Other</span>
                                    </div>}
            value="Other">Other</Select.Option>

          </Select>
          
          </Form.Item> 
          
          <div
             className='relative w-full mt-5 flex justify-center gap-32'>
              <div>
              <Button
              type='secondary'
              onClick={()=>handleClick('back')}
              >
                Back
              </Button>
              </div>
              <div>
              <Button
              type='primary'
              htmlType='submit'
              >
                Next
              </Button>
              </div>
          </div>

          <div className='flex justify-between gap-10'> 
            <FormButtons
            handleClick = {handleClick}
            step = {step}
            stepsArray = {stepsArray}/>
    </div>

        </Form>
    </>
  )
}

export default GaurdianDetails