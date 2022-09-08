import React from 'react'
import {Form , Button , Select , Switch , Input} from 'antd';
import { useStateContext } from '../../contexts/ContextProvider';
import {IoCashOutline} from 'react-icons/io5'
import { FormButtons} from './index'
import {MdOutlineFormatListNumbered} from 'react-icons/md'
import {GrUserWorker} from 'react-icons/gr'

const OtherDetails = ({handleClick, step, stepsArray}) => {

const {formData , setFormData} = useStateContext()
  const [form] = Form.useForm();
  const otherDetails = formData.otherDetails;
  
  const onFinish = () => {
    handleClick('next');
   }

  return (
    <>

<Form
    // layout='vertical'
    labelCol={{ span: 9 }}
    wrapperCol={{ span: 14 }}
    form={form}
    name = 'bankDetails'
    onFinish={onFinish}
    autoComplete="off"
    className=' flex flex-col justify-center items-center w-full gap-0.5 h-full text-white'
    initialValues={
      {
        otherDetails_grossAnnualIncome : formData.otherDetails.grossAnnualIncome || null ,
        otherDetails_netWorth : formData.otherDetails.netWorth || null ,
        otherDetails_occupation : formData.otherDetails.occupation || null ,
        otherDetails_politicallyExposed : formData.otherDetails.politicallyExposed || null ,
      }
    }>
    
    <Form.Item
        label={<span className='text-white'>Gross Annual Income</span>}
        className='relative w-full'
        name = 'otherDetails_grossAnnualIncome'
        rules={[
          {
            required: true,
            message: 'Please enter the Gross Annual Income',
          }
        ]}
    >
      <Select
      optionLabelProp='label'
      allowClear
      showSearch
      placeholder = {<div className='flex gap-1 justify-start'>
      <IoCashOutline className=' text-green-500 text-xl mt-3 '/>
      <span>Select a Value</span>
      </div>
    }
    size='large'
    onChange={(e) => {otherDetails.grossAnnualIncome= e}}>

      <Select.Option value = '0-1000000' label={<div className='flex gap-1 justify-start'>
                                     <IoCashOutline className=' text-green-500 text-xl mt-3 '/>
                                    <span>0-1000000</span>
                                    </div>}>0-1000000</Select.Option>
      <Select.Option value = '0-1000000' label={<div className='flex gap-1 justify-start'>
                                     <IoCashOutline className=' text-green-500 text-xl mt-3 '/>
                                    <span>1000001-2000000</span>
                                    </div>}>2000001-3000000</Select.Option>
      <Select.Option value = '0-1000000' label={<div className='flex gap-1 justify-start'>
                                     <IoCashOutline className=' text-green-500 text-xl mt-3 '/>
                                    <span>3000001-4000000</span>
                                    </div>}>3000001-4000000</Select.Option>
      <Select.Option value = '0-1000000' label={<div className='flex gap-1 justify-start'>
                                     <IoCashOutline className=' text-green-500 text-xl mt-3 '/>
                                    <span>4000001-5000000</span>
                                    </div>}>4000001-5000000</Select.Option>
      <Select.Option value = '0-1000000' label={<div className='flex gap-1 justify-start'>
                                     <IoCashOutline className=' text-green-500 text-xl mt-3 '/>
                                    <span>5000001-6000000</span>
                                    </div>}>5000001-6000000</Select.Option>                                                                                                

    </Select>



    </Form.Item>
    <Form.Item
        label={<span className='text-white'>Net Worth</span>}
        className='relative w-full'
        name = 'otherDetails_netWorth'
        rules={[
          {
            required: true,
          },
        ]}
        >
          <Input
            prefix = {<MdOutlineFormatListNumbered className=' text-green-500 text-xl'/>}
            size='large'
            placeholder = "Enter Net Worth"
            onChange={(e) => {otherDetails.netWorth= e.target.value ;}}
            allowClear
            />


         </Form.Item>

         <Form.Item
        label={<span className='text-white'>Occupation</span>}
        className='relative w-full'
        name = 'otherDetails_occupation'
        rules={[
          {
            required: true,
          },
        ]}
        >
          <Input
            prefix = {<GrUserWorker className=' text-green-500 text-xl'/>}
            size='large'
            placeholder = "Occupation.."
            onChange={(e) => {otherDetails.occupation= e.target.value ;}}
            allowClear
            />


         </Form.Item>
         <Form.Item

      label={<span className='text-white'>Politically Exposed ? </span>}
      name='otherDetails_politicallyExposed'
      className='relative w-full'
      rules={[
        {
          required: true,
          message: 'Please select an option',
        }
      ]}
      >
        <Switch
        onChange={(e)=>{ otherDetails.politicallyExposed = e}}
        checkedChildren= "Yes" unCheckedChildren="No"/>


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
                Submit
              </Button>
              </div>
          </div>



    </Form>

    </>
  )
}

export default OtherDetails