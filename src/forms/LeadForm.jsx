import { useState, useEffect } from 'react';
import { Form, Select, Input, Checkbox, Radio, notification, Upload } from 'antd';
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
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [studentId, setStudentId] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);

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

  const handleInstituteChange = (value) => {
    setSelectedInstitute(value);
    setSelectedUniversity(null);
  };

  const handleUniversityChange = (value) => {
    setSelectedUniversity(value);
    setSelectedCourse(null);
  };

  const handleCourseChange = (value) => {
    setSelectedCourse(value);
  };

  const handleSpecializationChange = (value) => {
    setSelectedSpecialization(value);
  };

  const generateFormItems = (fields) => {
    return fields.map((field) => {
      // Add a check to ensure that field.label is defined
      const capitalizedLabel = field.label ? field.label.charAt(0).toUpperCase() + field.label.slice(1) : '';
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
              name={field.name}
              rules={[
                {
                  required: field.required === 'require',
                  validator: (_, value) => {
                    return new Promise((resolve, reject) => {
                      if (value || field.required !== 'require') {
                        resolve();
                      } else {
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
                  <Radio key={option} value={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </Radio>
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
          )
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
              <Input type="date" placeholder={field.place} className='uppercase' />
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

  return (
    <div>
      <form className='grid grid-flow-col gap-3'>
        <Form.Item label="Select Institute" name={['customfields', 'institute_name']}>
          <Select onChange={handleInstituteChange} placeholder="--Select Institute--">
            {formData.map((item) => (
              <Option key={item.value} value={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
        {selectedInstitute && (
          <>
            <Form.Item label="Select University" name={['customfields', 'university_name']}>
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
            {selectedUniversity && (
              <Form.Item label="Select Course" name={['education', 'course']}>
                <Select onChange={handleCourseChange} placeholder="--Select Course--">
                  {formData
                    .find((item) => item.value === selectedInstitute)
                    .universities.find((university) => university.value === selectedUniversity)
                    .fields[9].courses.map((course) => (
                      <Option key={course.value} value={course.value}>
                        {course.label}
                      </Option>
                    ))}
                </Select>
              </Form.Item>
            )}
            {selectedUniversity && selectedCourse && (
              <Form.Item label="Select Specialization" name={['customfields', 'enter_specialization']}>
                <Select
                  placeholder="--Select Specialization--"
                  onChange={handleSpecializationChange}
                >
                  {formData
                    .find((item) => item.value === selectedInstitute)
                    .universities.find((university) => university.value === selectedUniversity)
                    .fields[9].courses
                    .find((course) => course.value === selectedCourse)
                    .specializations.map((specialization) => (
                      <Option key={specialization.value} value={specialization.value}>
                        {specialization.label}
                      </Option>
                    ))}
                </Select>
              </Form.Item>
            )}
          </>
        )}
      </form>
      {selectedUniversity && (
        <div>
          <form className='grid grid-cols-4 gap-3'>
            {generateFormItems(
              formData
                .find((item) => item.value === selectedInstitute)
                .universities.find((university) => university.value === selectedUniversity).fields

            )}
          </form>
        </div>
      )}
    </div>
  );
}