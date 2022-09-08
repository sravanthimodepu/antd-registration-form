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
import {RiCake2Fill} from "react-icons/ri";
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
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 14 }}
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
          label={<span className='text-white'>Salutation</span>}
        className='relative w-full'
        name='firstHolder_salutation'
        rules={[
          {
            required: true,
            message: 'Please select your salutation',
            
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
          label={<span className='text-white'>First Name</span>}
           className='relative w-full'
           name='firstHolder_firstName'
           rules={[
            {
              required: true,
              message: 'Please input your first name',
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
          label={<span className='text-white'>Middle Name</span>}
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
          label={<span className='text-white'>Last Name</span>}
           className='relative w-full'
           name='firstHolder_lastName'
           rules={[
            {
              required: true,
              message: 'Please input your last name',
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
          label={<span className='text-white'>Gender</span>}
          
            className='relative w-full'
            name='firstHolder_gender'
            rules={[
              {
                required: true,
                message: 'Please select the Gender'
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
            <Select.Option value = "Other"
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
            label={<span className='text-white'>PAN</span>}
           
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
          label={<span className='text-white'>Father/<br/>Husband Name</span>}
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
          //label={<p className=' relative right-0  text-black text-center p-4 pr-1 pl-0 border rounded mt-6 bg-white text-base'>First Holder Date Of Birth:</p>}
          label={<span className='text-white'>Date Of Birth</span>}
          className='relative w-full'
          name='firstHolder_dob'
          rules={[
            {
              required: true,
              message: 'Please input your Date of Birth!',
            }
          ]}
          hasFeedback
          >
            <DatePicker
            prevIcon = {<RiCake2Fill className='text-green-500 text-xl'/>}
            superPrevIcon = {<RiCake2Fill className='text-green-500 text-xl'/>}
            nextIcon = {<RiCake2Fill className='text-green-500 text-xl'/>}
            superNextIcon = {<RiCake2Fill className='text-green-500 text-xl'/>}
            suffixIcon = {<RiCake2Fill className='text-green-500 text-xl'/>}
            className='w-full'
            placeholder='Date of Birth'	
            onChange={(e)=>{firstHolder.dob =  moment(e).format('DD-MM-YYYY').toString() ; console.log(formData)}}
            format='DD/MM/YYYY'
            size='large'/>
          </Form.Item>
          
          <Form.Item
          label={<span className='text-white'>CKYC number</span>}	
          className='relative w-full'
          name='firstHolder_ckyc'
          rules={[
            {
              required: true,
              message: 'Please input your CKYC!',
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
          maxLength={14}
          size='large'
          allowClear
          prefix = {<BsCardText className=' text-green-500 text-xl'/>}
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
    </>
  )
}

export default FirstHolder