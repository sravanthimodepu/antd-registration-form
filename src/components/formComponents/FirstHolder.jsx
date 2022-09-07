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

const FirstHolder = ({handleClick , step , stepsArray}) => {
  const {formData , setFormData} = useStateContext()
  const [form] = Form.useForm();
  const onFinish = () => {
    handleClick('next');
   } 
   const firstHolder = formData.firstHolder;
  return (
    <>
    
      <Form
        form={form}
        name='FirstHolder'
        onFinish={onFinish}
        autoComplete = "off"
        className=' flex flex-col justify-center items-center w-full gap-0.5 h-full text-white'
        initialValues={
          {
            firstHolder_salutation: formData.firstHolder.salutation || null,
            firstHolder_firstName: formData.firstHolder.firstName || null,
            firstHolder_middleName: formData.firstHolder.middleName || null,
            firstHolder_lastName: formData.firstHolder.lastName || null,
            firstHolder_gender : formData.firstHolder.gender || null,
            firstHolder_pan : formData.firstHolder.pan || null,
            firstHolder_fatherOrHusbandName : formData.firstHolder.fatherOrHusbandName || null,
            firstHolder_dob : formData.firstHolder.dob ? moment(formData.firstHolder.dob, 'DD-MM-YYYY') : null,
            firstHolder_ckyc : formData.firstHolder.cKYC || null,
          }
        }
        >
        <Form.Item
        className='relative w-full'
        name='firstHolder_salutation'
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
          <ImProfile className=' text-green-500 text-xl mt-3 '/>
          <span>Salutation</span>
          </div>
          }
          size='large'
          onChange={(value) => {firstHolder.salutation = value}}>
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
                                    <span>Captian</span>
                                    </div>}
            value="Captian">Captian</Select.Option>

          </Select>
          
          </Form.Item>  

          <Form.Item
           className='relative w-full'
           name='firstHolder_firstName'
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
          placeholder = "First Name"
          onChange={(e) => {firstHolder.firstName = e.target.value}}
          allowClear
          />

          </Form.Item>

          <Form.Item
           className='relative w-full'
           name='firstHolder_middleName'
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
          onChange={(e) => {firstHolder.middleName = e.target.value}}
          allowClear
          />

          </Form.Item>

          <Form.Item
           className='relative w-full'
           name='firstHolder_lastName'
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
          size='large'
          placeholder = "Last Name"
          onChange={(e) => {firstHolder.lastName = e.target.value}}
          allowClear
          />

          </Form.Item>

          <Form.Item
            className='relative w-full'
            name='firstHolder_gender'
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
          <BsGenderAmbiguous className=' text-green-500 text-xl mt-3 '/>
          <span>Gender</span>
          </div>
          }
          size='large'
          onChange={(value) => {firstHolder.gender = value}}>
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
           className='relative w-full'
           name='firstHolder_pan'
           
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
          onChange={(e) => {firstHolder.pan = e.target.value.toUpperCase() ;}}
          allowClear
          />

          </Form.Item>

          <Form.Item
           className='relative w-full'
           name='firstHolder_fatherOrHusbandName'
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
           hasFeedback
          >
            
          <Input
          prefix = {<BsPersonPlus className=' text-green-500 text-xl'/>}	
          size='large'
          placeholder = "Father's Name or Husband's Name"
          onChange={(e) => {firstHolder.fatherOrHusbandName = e.target.value}}
          allowClear
          />

          </Form.Item>



          <Form.Item
          label={<p className=' relative right-0  text-black text-center p-4 pr-1 pl-0 border rounded mt-6 bg-white text-base'>First Holder Date Of Birth:</p>}
          className='relative w-full'
          name='firstHolder_dob'
          rules={[
            {
              required: true,
            }
          ]}
          hasFeedback
          >
            <DatePicker
            onChange={(e)=>{firstHolder.dob =  moment(e).format('DD-MM-YYYY').toString() ; console.log(formData)}}
            format='DD/MM/YYYY'
            size='large'/>
          </Form.Item>
          
          <Form.Item
          className='relative w-full'
          name='firstHolder_ckyc'
          rules={[
            {
              required: true,
            },
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
          size='large'
          allowClear
          prefix = {<BsCardText className=' text-green-500 text-xl'/>}
          defaultValue={formData.firstHolder.cKYC || null}
          placeholder='CKYC Number'
          onChange={(e) => {firstHolder.cKYC = e.target.value}}
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
        <div className='flex justify-between gap-10'> 
            <FormButtons
            handleClick = {handleClick}
            step = {step}
            stepsArray = {stepsArray}/>
    </div>
    </>
  )
}

export default FirstHolder