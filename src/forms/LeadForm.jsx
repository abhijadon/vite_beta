import { useState, useEffect } from 'react';
import { Form, Select, Input, Checkbox, Radio, DatePicker, notification, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import formData from './formData';

const { Option } = Select;
const { Dragger } = Upload;

// Inside the component

const openNotification = (fieldName) => {
  const capitalizedFieldName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
  notification.error({
    message: 'Field Validation',
    description: `${capitalizedFieldName} is required.`,
    placement: 'topLeft',
  });
};

export default function LeadForm() {
  const [selectedInstitute, setSelectedInstitute] = useState(null);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [studentId, setStudentId] = useState('');


  useEffect(() => {
    if (selectedInstitute && selectedUniversity) {
      setStudentId(generateUniqueId());
    } else {
      setStudentId('');
    }
  }, [selectedInstitute, selectedUniversity]);

  const generateUniqueId = () => {
    const min = 100000;
    const max = 999999;
    return String(Math.floor(Math.random() * (max - min - 1)) + min);
  };

  const generateFormItems = (fields) => {
    return fields.map((field) => {
      const capitalizedLabel = field.label.charAt(0).toUpperCase() + field.label.slice(1);

      switch (field.type) {
        case 'studentId':
          return (
            <Form.Item
              key={field.id}
              label={capitalizedLabel}
              name={field.name}
              initialValue={generateUniqueId()}
              rules={[
                {
                  required: field.required === 'require',
                  validator: (_, value) => {
                    return new Promise((resolve, reject) => {
                      if (value || field.required !== 'require') {
                        // If the value is not empty or the field is not required, resolve
                        resolve();
                      } else {
                        // If the value is empty and the field is required, reject and show notification
                        openNotification(field.label);
                        reject(`${field.label} is required.`);
                      }
                    });
                  },
                },
              ]}
            >
              <Input
                placeholder="Generated automatically"
                value={studentId}
                disabled
              />
            </Form.Item>
          );

        case 'text':
          return (
            <Form.Item
              key={field.id}
              label={capitalizedLabel}
              name={field.name}
              rules={[
                {
                  required: field.required === 'require',
                  validator: (_, value) => {
                    return new Promise((resolve, reject) => {
                      if (value || field.required !== 'require') {
                        // If the value is not empty or the field is not required, resolve
                        resolve();
                      } else {
                        // If the value is empty and the field is required, reject and show notification
                        openNotification(field.label);
                        reject(`${field.label} is required.`);
                      }
                    });
                  },
                },
              ]}
            >
              <Input placeholder={field.place} />
            </Form.Item>
          );
        case 'email':
          return (
            <Form.Item
              key={field.id}
              label={capitalizedLabel}
              name={field.name}
              rules={[
                {
                  required: field.required === 'require',
                  validator: (_, value) => {
                    return new Promise((resolve, reject) => {
                      if (value || field.required !== 'require') {
                        // If the value is not empty or the field is not required, resolve
                        resolve();
                      } else {
                        // If the value is empty and the field is required, reject and show notification
                        openNotification(field.label);
                        reject(`${field.label} is required.`);
                      }
                    });
                  },
                },
              ]}
            >
              <Input placeholder={field.place} />
            </Form.Item>
          );
        case 'tel':
          return (
            <Form.Item
              key={field.id}
              label={capitalizedLabel}
              name={field.name}
              rules={[
                {
                  required: field.required === 'require',
                  validator: (_, value) => {
                    return new Promise((resolve, reject) => {
                      if (value || field.required !== 'require') {
                        // If the value is not empty or the field is not required, resolve
                        resolve();
                      } else {
                        // If the value is empty and the field is required, reject and show notification
                        openNotification(field.label);
                        reject(`${field.label} is required.`);
                      }
                    });
                  },
                },
              ]}
            >
              <Input placeholder={field.place} />
            </Form.Item>
          );
        case 'checkbox':
          return (
            <Form.Item
              key={field.id}
              valuePropName="checked"
              name={field.name}
              rules={[
                {
                  required: field.required === 'require',
                  validator: (_, value) => {
                    return new Promise((resolve, reject) => {
                      if (value || field.required !== 'require') {
                        // If the value is not empty or the field is not required, resolve
                        resolve();
                      } else {
                        // If the value is empty and the field is required, reject and show notification
                        openNotification(field.label);
                        reject(`${field.label} is required.`);
                      }
                    });
                  },
                },
              ]}
            >
              <Checkbox>{capitalizedLabel}</Checkbox>
            </Form.Item>
          );
        case 'radio':
          return (
            <Form.Item
              key={field.id}
              label={capitalizedLabel}
              name={field.name} // This should be 'customfields.sendfeereceipt'
              rules={[
                {
                  required: field.required === 'require',
                  validator: (_, value) => {
                    return new Promise((resolve, reject) => {
                      if (value || field.required !== 'require') {
                        // If the value is not empty or the field is not required, resolve
                        resolve();
                      } else {
                        // If the value is empty and the field is required, reject and show notification
                        openNotification(field.label);
                        reject(`${field.label} is required.`);
                      }
                    });
                  },
                },
              ]}
            >
              <Radio.Group>
                {field.options.map((option) => (
                  <Radio key={option} value={option}>{option}</Radio>
                ))}
              </Radio.Group>
            </Form.Item>
          );
        case 'select':
          return (
            <Form.Item
              key={field.id}
              label={capitalizedLabel}
              name={field.name}
              rules={[
                {
                  required: field.required === 'require',
                  validator: (_, value) => {
                    return new Promise((resolve, reject) => {
                      if (value || field.required !== 'require') {
                        // If the value is not empty or the field is not required, resolve
                        resolve();
                      } else {
                        // If the value is empty and the field is required, reject and show notification
                        openNotification(field.label);
                        reject(`${field.label} is required.`);
                      }
                    });
                  },
                },
              ]}
            >
              <Select placeholder={field.place}>
                {field.options.map((option) => (
                  <Option key={option} value={option}>{option}</Option>
                ))}
              </Select>
            </Form.Item>
          );
        case 'date':
          return (
            <Form.Item
              key={field.id}
              label={capitalizedLabel}
              name={field.name}
              rules={[
                {
                  required: field.required === 'require',
                  validator: (_, value) => {
                    return new Promise((resolve, reject) => {
                      if (value || field.required !== 'require') {
                        // If the value is not empty or the field is not required, resolve
                        resolve();
                      } else {
                        // If the value is empty and the field is required, reject and show notification
                        openNotification(field.label);
                        reject(`${field.label} is required.`);
                      }
                    });
                  },
                },
              ]}
            >
              <DatePicker placeholder={field.place} />
            </Form.Item>
          );
        case 'number':
          return (
            <Form.Item
              key={field.id}
              label={capitalizedLabel}
              name={field.name}
              rules={[
                {
                  required: field.required === 'require',
                  validator: (_, value) => {
                    return new Promise((resolve, reject) => {
                      if (value || field.required !== 'require') {
                        // If the value is not empty or the field is not required, resolve
                        resolve();
                      } else {
                        // If the value is empty and the field is required, reject and show notification
                        openNotification(field.label);
                        reject(`${field.label} is required.`);
                      }
                    });
                  },
                },
              ]}
            >
              <Input type="number" placeholder={field.place} />
            </Form.Item>
          );
        case 'textarea':
          return (
            <Form.Item
              key={field.id}
              label={capitalizedLabel}
              name={field.name}
              rules={[
                {
                  required: field.required === 'require',
                  validator: (_, value) => {
                    return new Promise((resolve, reject) => {
                      if (value || field.required !== 'require') {
                        // If the value is not empty or the field is not required, resolve
                        resolve();
                      } else {
                        // If the value is empty and the field is required, reject and show notification
                        openNotification(field.label);
                        reject(`${field.label} is required.`);
                      }
                    });
                  },
                },
              ]}
            >
              <Input.TextArea rows={4} placeholder={field.place} />
            </Form.Item>
          );
        case 'file':
          return (
            <Form.Item
              label={capitalizedLabel}
              name={field.name}
              valuePropName="fileList"
              getValueFromEvent={(e) => e.fileList}
              rules={[
                {
                  required: field.required === 'require',
                  validator: (_, value) => {
                    return new Promise((resolve, reject) => {
                      // Check if there are files or the field is not required
                      if (value.length > 0 || field.required !== 'require') {
                        resolve(); // Resolve if the condition is met
                      } else {
                        // If no files are selected and the field is required, reject and show notification
                        openNotification(field.label);
                        reject(`${field.label} is required.`);
                      }
                    });
                  },
                },
              ]}
            >
              <Dragger
                multiple
                beforeUpload={() => false} // Prevent automatic upload on file selection
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag files to this area to upload</p>
                <p className="ant-upload-hint">Support for multiple images</p>
              </Dragger>
            </Form.Item>
          );
        default:
          return null;
      }
    });
  };
  const handleInstituteChange = (value) => {
    setSelectedInstitute(value);
    setSelectedUniversity(null);
  };

  const handleUniversityChange = (value) => {
    setSelectedUniversity(value);
  };

  return (
    <div>
      <form>
        <Form.Item label="Select Institute" name="customfields.institute_name">
          <Select onChange={handleInstituteChange} placeholder="--Select Institute--">
            {formData.map((item) => (
              <Option key={item.value} value={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
        {selectedInstitute && (
          <Form.Item label="Select University" name="customfields.university_name">
            <Select onChange={handleUniversityChange} placeholder="--Select University--">
              {formData
                .find((item) => item.value === selectedInstitute)
                .universities.map((university) => (
                  <Option key={university.value} value={university.value}>
                    {university.label}
                  </Option>
                ))}
            </Select>
          </Form.Item>
        )}
      </form>
      {selectedUniversity && (
        <form>
          {generateFormItems(
            formData
              .find((item) => item.value === selectedInstitute)
              .universities.find((university) => university.value === selectedUniversity).fields
          )}
        </form>
      )}
    </div>
  );
}