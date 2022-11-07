import React from 'react'
import { useStateContext } from '../../contexts/ContextProvider';
import {Form , Button , Select  , DatePicker , Switch , Input} from 'antd';
import {BsPerson} from "react-icons/bs";
import {RiCake2Fill} from "react-icons/ri";
import { BsPersonPlus } from 'react-icons/bs';
import {FaIdCard} from "react-icons/fa";
import * as moment from 'moment';

import { FormButtons} from './index'
const Nomination = ({handleClick, step, stepsArray}) => {
  const {formData , setFormData} = useStateContext()
  const [form] = Form.useForm();
   const nomination = formData.nomination;
   const onFinish = () => {
    console.log(nomination)
    console.log(formData)
    handleClick('next');
    console.log('nomination data submitted')
   }
  return (
    <>
    <Form
    form={form}
    labelCol={{ span: 9 }}
    wrapperCol={{ span: 14 }}
    name = 'Nomination Data'
    onFinish={onFinish}
    autoComplete= 'off'
    className=' flex flex-col justify-center items-center w-full gap-0.5 h-full text-white'
    initialValues={
        {
          nomination_nominationPreference : formData.nomination.nominationPreference || null,
          nomination_nomineeName : formData.nomination.nomineeName || null,
          nomination_dob : formData.nomination.dob ? moment(formData.nomination.dob , 'DD-MM-YYYY') : null ,
          nomination_relationship : formData.nomination.relationship || null,
          nomination_guardianName : formData.nomination.guardianName || null,
          nomination_guardianPan : formData.nomination.guardianPan || null,
        }
      }
    >

      <Form.Item

      label={<span className='text-white'>Nomination preference</span>}
      name='nomination_nominationPreference'
      className='relative w-full'
      >
        <Switch
        onChange={(e)=>{nomination.nominationPreference = e}}
        checkedChildren= "Yes" unCheckedChildren="No"/>


      </Form.Item>

      <Form.Item
          label={<span className='text-white'>Nominee Name</span>}
          className='relative w-full'
          name='nomination_nomineeName'
          rules={[
            {
              required: true,
              message: 'Please input your nominee name!',
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
          placeholder = "Enter Nominee Name"
          onChange={(e) => {nomination.nomineeName = e.target.value}}
          allowClear
          />

          </Form.Item>

          <Form.Item
          label={<span className='text-white'>Nominee Date of Birth</span>}
          className='relative w-full'
          name='nomination_dob'
          rules={[
            {
              required: true,
              message: 'Please select date of birth',
            }
          ]}
          hasFeedback
          >
            <DatePicker className='w-full'
             prevIcon = {<RiCake2Fill className='text-green-500 text-xl'/>}
             superPrevIcon = {<RiCake2Fill className='text-green-500 text-xl'/>}
             nextIcon = {<RiCake2Fill className='text-green-500 text-xl'/>}
             superNextIcon = {<RiCake2Fill className='text-green-500 text-xl'/>}
             suffixIcon = {<RiCake2Fill className='text-green-500 text-xl'/>}
            placeholder='Nominee Date Of Birth'
            onChange={(e)=>{nomination.dob =  moment(e).format('DD-MM-YYYY').toString() ;}}
            format='DD/MM/YYYY'
            size='large'/>
          </Form.Item>

          <Form.Item
          label={<span className='text-white'>Nominee Relation</span>}
          
        className='relative w-full'
        name='nomination_relationship'
        rules={[
          {
            required: true,
            message: 'Please input your nominee relationship!',
            
          },
        ]}>
          <Select
          
          optionLabelProp='label'
          allowClear
          showSearch
          placeholder = {<div className='flex gap-1 justify-start'>
          <BsPersonPlus className=' text-green-500 text-xl mt-3 '/>
          <span>Select Relationship</span>
          </div>
          }
          size='large'
          onChange={(value) => { nomination.relationship = value}}>
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

          <Form.Item
          label={<span className='text-white'>Nominee Guardian</span>}
          className='relative w-full'
          name='nomination_guardianName'
          rules={[
            {
              required: true,
              message: 'Please input your nominee guardian name!',
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
          placeholder = "Guardian Name"
          onChange={(e) => {nomination.guardianName = e.target.value}}
          allowClear
          />

          </Form.Item>

          <Form.Item
           className='relative w-full'
           name='nomination_guardianPan'
          label={<span className='text-white'>Guardian Pan</span>}
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
          onChange={(e) => {nomination.guardianPan = e.target.value.toUpperCase() ;}}
          allowClear
          />
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
          



    </Form>
    </>
  )
}

export default Nomination