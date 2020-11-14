import React from 'react'
import './CreateNewsSection.css'
import { Form, Input, InputNumber, Button,Select, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

function CreateNews(){
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 16 },
      };

      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };

      const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
            console.log("info ",info)
          if (info.file.status !== 'uploading') {
            console.log("data",info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

      const { Option } = Select;

      function handleChange(value) {
        console.log(`selected ${value}`);
      }
    
        const onFinish = values => {
          console.log(values);
        };
    
    return(
        <div className="create-news">
            <h3>Add New</h3>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item name={['news', 'caregory']} label="categorie" rules={[{ required: true }]}>
            <Select placeholder="select Category" style={{ width: 150 }} onChange={handleChange}>
                  <Option value="Industries">Industries</Option>
                  <Option value="Technologies">Technologies</Option>
                </Select>
              </Form.Item>
              <Form.Item name={['news', 'title']} label="Title" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              
              <Form.Item name={['news', 'link']} label="Link" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name={['news', 'description']} label="Description" rules={[{ required: true }]}>
                <Input.TextArea />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                  <Form.Item>
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>,
                  </Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
        </div>
    )
}


export {CreateNews}