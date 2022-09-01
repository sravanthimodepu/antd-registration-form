// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {Form, Button, Checkbox, DatePicker, Input, Select} from 'antd';
import FormItem from 'antd/es/form/FormItem';
import vlogo from './vlogo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Form
          autoComplete="off"
          labelCol={{ span:10 }}
          wrappedCol={{ span:14 }}
        >
        {/* <img src="./vlogo.jpg" alt='logo'></img> */}
        <img src={vlogo} alt='logo' style={{height: '100px', display:'flex', justifyContent:'center'}}/>

          <Form.Item 
            name="fullName"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
              {whitespace: true},
              {min:3 },
            ]}
            hasFeedback
            >
            <Input placeholder='Type your name'/>
          </Form.Item>
          <Form.Item 
            name="email" 
            label="Email"
            rules={[
              {
                required: true,
                message:"Please enter your email"
              },
              {type: "email",
                message: "Please enter a valid email"
            }
            ]}
              hasFeedback
            >
            <Input
            placeholder='Type your email'
            value={'nn'}
            onch/>
          </Form.Item>
          <Form.Item 
          name="password" 
          label="Password"
          rules={[
            {
              required: true,
            },
            {min:6 },
            // {
            //   validator:(_,value)=>
            //   value && value.includes('A') ? Promise.resolve():Promise.reject("password does not match criteria")
            // }
          ]}
            hasFeedback>
            <Input.Password placeholder='Type your password'/>
          </Form.Item>
          <Form.Item name="confirmPassword" label="Confirm Password"
          dependencies={['password']}
          rules={[
            {
              required: true,
            },
            ({getFieldValue})=>({
              validator(_,value){
                if(!value || getFieldValue('password') === value){
                  return Promise.resolve()
                }
                return Promise.reject(
                  "The tw o passwords that yuo entered does not match"
                );
              },
            }),
          ]}
          hasFeedback
          >
            <Input.Password placeholder='Please confirm your password'/>
          </Form.Item>
          <Form.Item name="gender" label="Gender" requiredMark="optional">
            <Select placeholder="Select your Gender">
              <Select.Option value="male"></Select.Option>
              <Select.Option value="Female"></Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="dob" label="Date of Birth"
          rules={[
            {
              required: true,
              message: "Please provide your date of birth"
            },
          ]}
          hasFeedback>
            <DatePicker 
            style = {{width:"100%"}}
            picker="date" placeholder='Choose the date'/>
          </Form.Item>
          <Form.Item name="website" label="Website">
            <Input placeholder='Add your website url'/>
          </Form.Item>
          <Form.Item name="agreement" wrapperCol={{ span:24}}
            rules={[
              {
                required: true,
                message: "To proceed you need to agree with our terms and conditions",
              }
            ]}
          >
            <Checkbox> Agree to the terms and conditions</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Register</Button>
          </Form.Item>
          {/* <Form.Item>
            <Button type="primary" htmlType="next">Next</Button>
          </Form.Item> */}
          
        </Form>
      </header>
    </div>
  );
}

export default App;
