import { useState, useEffect } from 'react';
import { Form, Select, Input, Checkbox, Radio, DatePicker, Upload, notification } from 'antd';
import formData from './formData';
import { UploadOutlined } from '@ant-design/icons';
import useLanguage from '@/locale/useLanguage';
const { Option } = Select;
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

  const translate = useLanguage();
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e.map(file => file.fileList);
    }
    return e && e.fileList;
  };

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
              label={translate('Image')}
              name="image"
              valuePropName="fileList"
              getValueFromEvent={normFile}
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
              <Upload
                name="logo"
                listType="picture"
                beforeUpload={() => false}
                multiple={true} // Enable multiple file selection
              >
                <UploadOutlined /> Upload
              </Upload>
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