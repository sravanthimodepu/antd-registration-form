import React from 'react'
import { useStateContext } from '../../contexts/ContextProvider';
import {Form , Button , Select  , DatePicker , Switch , Input} from 'antd';
import {GiRotaryPhone , GiPhone} from 'react-icons/gi'
import {MdEmail} from 'react-icons/md'
import {BsTwitter , BsLinkedin , BsFacebook} from 'react-icons/bs'


import { FormButtons} from './index'
const ContactFirstHolder = ({handleClick, step, stepsArray}) => {

  const {formData , setFormData} = useStateContext()
  const [form] = Form.useForm();
  const onFinish = () => {
    handleClick('next');
   } 


   const contactDetails = formData.firstHolder.contactDetails;

  return (
    <>
    <Form
            form={form}
            name='contactDetails'
            onFinish={onFinish}
            autoComplete = "off"
            className=' flex flex-col justify-center items-center w-full gap-0.5 h-full text-white'
            initialValues={
              {
                contactDetails_telephone : formData.firstHolder.contactDetails.telephone || null,
                contactDetails_mobile : formData.firstHolder.contactDetails.mobile || null,
                contactDetails_email : formData.firstHolder.contactDetails.email || null,
                contactDetails_alternateEmail : formData.firstHolder.contactDetails.alternateEmail || null,
                contactDetails_twitter : formData.firstHolder.contactDetails.twitter || null,
                contactDetails_facebook : formData.firstHolder.contactDetails.facebook || null,
                contactDetails_linkedIn : formData.firstHolder.contactDetails.linkedIn || null,
            }
          } 
  >       
        <Form.Item
        className='relative w-full'
        name='contactDetails_telephone'
        rules={[
          {
            required: true,
            message: 'Please input your telephone number!',
          },
          {
            pattern : /^[0-9]{2,4}[-][\d]{6,8}$/,
            message : 'please follow the format 0000-00000000 (STD code)-(mobile number)'

          }
        ]} 
        >
          <Input
          prefix = {<GiRotaryPhone className=' text-green-500 text-xl'/>}	
          size='large'
          placeholder='Telephone'
          onChange={(e) => contactDetails.telephone = e.target.value}
          allowClear

          />

        </Form.Item>

        <Form.Item
        className='relative w-full'
        name='contactDetails_mobile'
        rules={[
          {
            required: true,
            message: 'Please input your mobile number!',
            
          },
            {
              pattern : /^[+][\d]{2,3}[-][\d]{9,10}$/,
              message: "Contact number should start with country code. For example: +91-xxxxxxxxxx",
          }
        ]} 
        >
          <Input
          prefix = {<GiPhone className=' text-green-500 text-xl'/>}	
          size='large'
          placeholder='Mobile'
          onChange={(e) => contactDetails.mobile = e.target.value}
          allowClear

          />

        </Form.Item>


        <Form.Item
        className='relative w-full'
        name='contactDetails_email'
        rules={[
          {
            required: true,
            message: 'Please input your email!',
            
          },
          {
            pattern: /^.+\@.+\..+$/,
            message: 'Invalid Email',
        }
        ]} 
        >
          <Input
          prefix = {<MdEmail className=' text-green-500 text-xl'/>}	
          size='large'
          placeholder='Email'
          onChange={(e) => contactDetails.email = e.target.value}
          allowClear

          />

        </Form.Item>


        <Form.Item
        className='relative w-full'
        name='contactDetails_alternateEmail'
        dependencies={['contactDetails_email']}
        rules={[
          {
            pattern: /^.+\@.+\..+$/,
            message: 'Invalid Email',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('contactDetails_email') !== value) {
                return Promise.resolve();
              }
              return Promise.reject('Email and Alternate Email cannot be same!');
            },
          }),
        ]} 
        >
          <Input
          prefix = {<MdEmail className=' text-green-500 text-xl'/>}	
          size='large'
          placeholder='Alternate Email'
          onChange={(e) => contactDetails.alternateEmail = e.target.value}
          allowClear

          />

        </Form.Item>

        <Form.Item
        className='relative w-full'
        name='contactDetails_twitter'>
          <Input
          prefix = {<BsTwitter className=' text-green-500 text-xl'/>}	
          addonBefore = 'https://www.twitter.com/'
          size='large'
          placeholder='Twitter Username'
          onChange={(e) => contactDetails.twitter = e.target.value}
          />
         </Form.Item>
         
         
         <Form.Item
        className='relative w-full'
        name='contactDetails_linkedIn'>
          <Input
          prefix = {<BsLinkedin className=' text-green-500 text-xl'/>}	
          addonBefore = 'https://www.linkedin.com/'
          size='large'
          placeholder='Linkedin Username'
          onChange={(e) => contactDetails.linkedIn = e.target.value}
          />
         </Form.Item>
         <Form.Item
        className='relative w-full'
        name='contactDetails_facebook'>
          <Input
          prefix = {<BsFacebook className=' text-green-500 text-xl'/>}	
          addonBefore = 'https://www.facebook.com/'
          size='large'
          placeholder='Twitter Username'
          onChange={(e) => contactDetails.facebook = e.target.value}
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

export default ContactFirstHolder