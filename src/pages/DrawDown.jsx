import React from 'react'

export const DrawDown = () => {
  return (
    <div>DrawDown</div>
  )
}

export default DrawDown;

// import React from 'react';
// import {columns} from 'antd';

// ReactDOM.render(<Columns />, mountNode);


// export const DrawDown = () => {

//   const {  Table  } = antd;

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     filters: [
//       {
//         text: 'Joe',
//         value: 'Joe',
//       },
//       {
//         text: 'Category 1',
//         value: 'Category 1',
//       },
//       {
//         text: 'Category 2',
//         value: 'Category 2',
//       },
//     ],
//     filterMode: 'tree',
//     filterSearch: true,
//     onFilter: (value, record) => record.address.startsWith(value),
//     width: '30%',
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     sorter: (a, b) => a.age - b.age,
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     filters: [
//       {
//         text: <span>London</span>,
//         value: 'London',
//       },
//       {
//         text: <span>New York</span>,
//         value: 'New York',
//       },
//     ],
//     onFilter: (value, record) => record.address.startsWith(value),
//     filterSearch: true,
//     width: '40%',
//   },
// ];
// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//     age: 32,
//     address: 'London No. 2 Lake Park',
//   },
// ];

// const onChange = (pagination, filters, sorter, extra) => {
//   console.log('params', pagination, filters, sorter, extra);
// };

// const App = () => <Table columns={columns} dataSource={data} onChange={onChange} />;

// const ComponentDemo = App;


// ReactDOM.render(<ComponentDemo />, mountNode);


//   return (
//     <div id="container" style="padding: 24px" />


//   )
// }
