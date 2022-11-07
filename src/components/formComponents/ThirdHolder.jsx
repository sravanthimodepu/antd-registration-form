import React  from 'react'
import {BsGenderAmbiguous} from "react-icons/bs"
import {BsPerson} from "react-icons/bs";
import {BsPersonPlus} from "react-icons/bs";
import {BsCardText} from  "react-icons/bs";
import {ImProfile} from "react-icons/im";
import {FaIdCard} from "react-icons/fa";
import {FaUserAlt} from "react-icons/fa";
import {FaUserFriends} from "react-icons/fa";
import {MdAccountBalance} from "react-icons/md";
import { useStateContext } from '../../contexts/ContextProvider';
import {Form , Button , Select , DatePicker , Input} from 'antd';
import {FormButtons} from './index'

const ThirdHolder = ({handleClick , step , stepsArray}) => {
  const {formData , setFormData} = useStateContext()
  const [form] = Form.useForm();
  const onFinish = () => {
    handleClick('next');
   } 
   const thirdHolder = formData.thirdHolder;

  return (
    <>

    <Form
        form={form}
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 14 }}
        name='ThirdHolder'
        onFinish={onFinish}
        autoComplete = "off"
        className=' flex flex-col justify-center items-center w-full gap-0.5 h-full text-white'
        initialValues={
          {
            thirdHolder_salutation: formData.thirdHolder.salutation || null,
            thirdHolder_firstName: formData.thirdHolder.firstName || null,
            thirdHolder_middleName: formData.thirdHolder.middleName || null,
            thirdHolder_lastName: formData.thirdHolder.lastName || null,
            thirdHolder_gender : formData.thirdHolder.gender || null,
            thirdHolder_pan : formData.thirdHolder.pan || null,
            thirdHolder_ckyc : formData.thirdHolder.cKYC || null,
            thirdHolder_relationship : formData.thirdHolder.relationship || null,
            thirdHolder_modeOfHolding : formData.thirdHolder.modeOfHolding || null
          }
        }
        >
        <Form.Item
        label={<span className='text-white'>Salutation</span>}
        className='relative w-full'
        name='thirdHolder_salutation'
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
          onChange={(value) => {thirdHolder.salutation = value}}>
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
           name='thirdHolder_firstName'
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
          onChange={(e) => {thirdHolder.firstName = e.target.value}}
          allowClear
          />

          </Form.Item>

          <Form.Item
        label={<span className='text-white'>Middle Name</span>}
           className='relative w-full'
           name='thirdHolder_middleName'
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
          onChange={(e) => {thirdHolder.middleName = e.target.value}}
          allowClear
          />

          </Form.Item>

          <Form.Item
          label={<span className='text-white'>Last Name</span>}
           className='relative w-full'
           name='thirdHolder_lastName'
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
          onChange={(e) => {thirdHolder.lastName = e.target.value}}
          allowClear
          />

          </Form.Item>

          <Form.Item
            label={<span className='text-white'>Gender</span>}
            className='relative w-full'
            name='thirdHolder_gender'
            rules={[
              
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
          onChange={(value) => {thirdHolder.gender = value}}>
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
            label={<span className='text-white'>Pan Number</span>}
           className='relative w-full'
           name='thirdHolder_pan'
           
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
          onChange={(e) => {thirdHolder.pan = e.target.value.toUpperCase() ;}}
          allowClear
          />

          </Form.Item>

          
          <Form.Item
            label={<span className='text-white'>CKYC number</span>}
          className='relative w-full'
          name='thirdHolder_ckyc'
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
          size='large'
          allowClear
          prefix = {<BsCardText className=' text-green-500 text-xl'/>}
          defaultValue={formData.thirdHolder.cKYC || null}
          placeholder='Third Holder CKYC Number'
          onChange={(e) => {thirdHolder.cKYC = e.target.value}}
          />

          </Form.Item>
          <Form.Item
            label={<span className='text-white'>Relation</span>}
        className='relative w-full'
        name='thirdHolder_relationship'
        rules={[
        ]}>
          <Select
          optionLabelProp='label'
          allowClear
          showSearch
          placeholder = {<div className='flex gap-1 justify-start'>
          <BsPersonPlus className=' text-green-500 text-xl mt-3 '/>
          <span>Third Holder Relationship</span>
          </div>
          }
          size='large'
          onChange={(value) => { thirdHolder.relationship = value}}>
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
        label={<span className='text-white'>Mode of Holding</span>}
        className='relative w-full'
        name='thirdHolder_modeOfHolding'
        rules={[
        ]}>
          <Select
          optionLabelProp='label'
          allowClear
          showSearch
          placeholder = {<div className='flex gap-1 justify-start'>
          <MdAccountBalance className=' text-green-500 text-xl mt-3 '/>
          <span>Third Holder Mode Of Holding</span>
          </div>
          }
          size='large'
          onChange={(value) => { thirdHolder.modeOfHolding = value}}>
            <Select.Option label = {<div className='flex gap-1 justify-start'>
                                     <FaUserAlt className=' text-green-500 text-xl mt-3 '/>
                                    <span>Individual</span>
                                    </div>}
          value="individual">Individual</Select.Option>
            <Select.Option label = {<div className='flex gap-1 justify-start'>
                                     <FaUserFriends className=' text-green-500 text-xl mt-3 '/>
                                    <span>Joint</span>
                                    </div>}
            value="joint">Joint</Select.Option>

          </Select>
          
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

export default ThirdHolder