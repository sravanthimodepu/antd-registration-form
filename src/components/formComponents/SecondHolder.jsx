import React  from 'react'
import {BsGenderAmbiguous} from "react-icons/bs"
import {BsPerson} from "react-icons/bs";
import {BsPersonPlus} from "react-icons/bs";
import {BsCardText} from  "react-icons/bs";
import {ImProfile} from "react-icons/im";
import {FaIdCard} from "react-icons/fa";
import { useStateContext } from '../../contexts/ContextProvider';
import {Form , Button , Select , DatePicker , Input} from 'antd';
import {FormButtons} from './index'
import * as moment from 'moment';

const SecondHolder = ({handleClick , step , stepsArray}) => {
  const {formData , setFormData} = useStateContext()
  const [form] = Form.useForm();
  const onFinish = () => {
    handleClick('next');
   } 
   const secondHolder = formData.secondHolder;



  return (
    <>
      <Form
      labelCol={{ span: 9 }}
      wrapperCol={{ span: 14 }}
        form={form}
        name='SecondHolder'
        onFinish={onFinish}
        autoComplete = "off"
        className=' flex flex-col justify-center items-center w-full gap-0.5 h-full text-white'
        initialValues={
          {
            secondHolder_salutation: formData.secondHolder.salutation || null,
            secondHolder_firstName: formData.secondHolder.firstName || null,
            secondHolder_middleName: formData.secondHolder.middleName || null,
            secondHolder_lastName: formData.secondHolder.lastName || null,
            secondHolder_gender : formData.secondHolder.gender || null,
            secondHolder_pan : formData.secondHolder.pan || null,
            secondHolder_ckyc : formData.secondHolder.cKYC || null,
          }
        }
        >
        <Form.Item
        label={<span className='text-white'>Salutation</span>}
        className='relative w-full'
        name='secondHolder_salutation'
        rules={[
        ]}>
          <Select
          optionLabelProp='label'
          allowClear
          showSearch
          placeholder = {<div className='flex gap-1 justify-start'>
          <ImProfile className=' text-green-500 text-xl mt-3 '/>
          <span>Salutation</span>
          </div>
          }
          size='large'
          onChange={(value) => {secondHolder.salutation = value}}>
            <Select.Option label = {<div className='flex gap-1 justify-start'>
                                     <ImProfile className=' text-green-500 text-xl mt-3 '/>
                                    <span>Mr</span>
                                    </div>}
          value="Mr">Mr</Select.Option>
            <Select.Option label = {<div className='flex gap-1 justify-start'>
                                     <ImProfile className=' text-green-500 text-xl mt-3 '/>
                                    <span>Mrs</span>
                                    </div>}
            value="Mrs">Mrs</Select.Option>
            <Select.Option label = {<div className='flex gap-1 justify-start'>
                                     <ImProfile className=' text-green-500 text-xl mt-3 '/>
                                    <span>Miss</span>
                                    </div>}
            value="Miss">Miss</Select.Option>
            <Select.Option label = {<div className='flex gap-1 justify-start'>
                                     <ImProfile className=' text-green-500 text-xl mt-3 '/>
                                    <span>Lt</span>
                                    </div>}
            value="Lt">Lt</Select.Option>
            <Select.Option label = {<div className='flex gap-1 justify-start'>
                                     <ImProfile className=' text-green-500 text-xl mt-3 '/>
                                    <span>Dr</span>
                                    </div>}
            value="Dr">Dr</Select.Option>
            <Select.Option label = {<div className='flex gap-1 justify-start'>
                                     <ImProfile className=' text-green-500 text-xl mt-3 '/>
                                    <span>Prof</span>
                                    </div>}
            value="Prof">Prof</Select.Option>
            <Select.Option label = {<div className='flex gap-1 justify-start'>
                                     <ImProfile className=' text-green-500 text-xl mt-3 '/>
                                    <span>Captain</span>
                                    </div>}
            value="Captian">Captain</Select.Option>

          </Select>
          
          </Form.Item>  

          <Form.Item
          label={<span className='text-white'>First Name</span>}
           className='relative w-full'
           name='secondHolder_firstName'
           rules={[
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
          placeholder = "First Name"
          onChange={(e) => {secondHolder.firstName = e.target.value}}
          allowClear
          />

          </Form.Item>

          <Form.Item
          label={<span className='text-white'>Middle Name</span>}
           className='relative w-full'
           name='secondHolder_middleName'
           rules={[
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
          size='large'
          placeholder = "Middle Name"
          onChange={(e) => {secondHolder.middleName = e.target.value}}
          allowClear
          />

          </Form.Item>

          <Form.Item
          label={<span className='text-white'>Last Name</span>}
           className='relative w-full'
           name='secondHolder_lastName'
           rules={[
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
          size='large'
          placeholder = "Last Name"
          onChange={(e) => {secondHolder.lastName = e.target.value}}
          allowClear
          />

          </Form.Item>

          <Form.Item
          label={<span className='text-white'>Gender</span>}
            className='relative w-full'
            name='secondHolder_gender'
            >
          
          
          <Select
          optionLabelProp='label'
          allowClear
          showSearch
          placeholder = {<div className='flex gap-1 justify-start'>
          <BsGenderAmbiguous className=' text-green-500 text-xl mt-3 '/>
          <span>Gender</span>
          </div>
          }
          size='large'
          onChange={(value) => {secondHolder.gender = value}}>
            <Select.Option
            value="male"
            label = {<div className='flex gap-1 justify-start'>
            <BsGenderAmbiguous className=' text-green-500 text-xl mt-3 '/>
            <span>Male</span>
            </div>
            }
            >Male</Select.Option>
            <Select.Option value="female"
            label = {<div className='flex gap-1 justify-start'>
            <BsGenderAmbiguous className=' text-green-500 text-xl mt-3 '/>
            <span>Female</span>
            </div>
            }
            >Female</Select.Option>
            <Select.Option value="Other"
            label = {<div className='flex gap-1 justify-start'>
            <BsGenderAmbiguous className=' text-green-500 text-xl mt-3 '/>
            <span>Other</span>
            </div>
            }
            >Other</Select.Option>
          </Select>

            </Form.Item>

            <Form.Item
            label={<span className='text-white'>Pan</span>}
           className='relative w-full'
           name='secondHolder_pan'
           
           rules={[
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
          onChange={(e) => {secondHolder.pan = e.target.value.toUpperCase() ;}}
          allowClear
          />

          </Form.Item>

          
          <Form.Item
          label={<span className='text-white'>Second Holder CKYC</span>}
          className='relative w-full'
          name='secondHolder_ckyc'
          rules={[
            {
              pattern: /^[0-9]+$/,
              message: "only numbers allowed"
            },
            {
              len: 14,
              message: 'CKYC Number is 14 digits long',
            }
          ]}
          >

          <Input
          maxLength={14}
          size='large'
          allowClear
          prefix = {<BsCardText className=' text-green-500 text-xl'/>}
          placeholder='CKYC Number'
          onChange={(e) => {secondHolder.cKYC = e.target.value}}
          />

          </Form.Item>


             <div
             className='relative w-full  mt-5 flex justify-center gap-32'>
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

export default SecondHolder