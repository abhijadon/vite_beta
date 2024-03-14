import { useState, useEffect } from 'react';
import { Form, Select, Input, Checkbox, Radio, notification, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import formData from './formData';
import useFetch from '@/hooks/useFetch';
import { request } from '@/request';

const { Option } = Select;
const { Dragger } = Upload;
const beforeUpload = (file) => {
  const isJpgOrPng =
    file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/svg+xml';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG or SVG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 5;
  if (!isLt2M) {
    message.error('Image must smaller than 5MB!');
  }
  return false;
};

/* require message show on notification */
const openNotification = (fieldName) => {
  const capitalizedFieldName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
  notification.error({
    message: 'Field Validation',
    description: `${capitalizedFieldName} is required.`,
    placement: 'topLeft',
  });
};
/* require message show on notification */
export default function LeadForm() {
  /* useState, useEffect uses condition */
  const [selectedInstitute, setSelectedInstitute] = useState(null);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [studentId, setStudentId] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);
  /* useState, useEffect uses condition */

  const { data: userList, isLoading: userLoading } = useFetch(() =>
    request.list({ entity: 'admin' })
  );
  /* student id generate automatica */
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
  /* student id generate automatica */

  /* handlechanges */
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

  const handlePaymentChange = (value) => {
    setSelectedPayment(value)
  }
  /* handlechanges */

  /* generate fields dynamic by selectedUniversity */

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
              label={field.label ? field.label.charAt(0).toUpperCase() + field.label.slice(1) : ''}
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
              <Select showSearch optionFilterProp='children' filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              } placeholder={field.place}>
                {field.options.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label ? option.label.charAt(0).toUpperCase() + option.label.slice(1) : ''}
                  </Option>
                ))}
              </Select>
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
              <Input.TextArea rows={1} placeholder={field.place} />
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
                beforeUpload={beforeUpload}
                listType="picture"
                accept="image/png, image/jpeg ,image/svg+xml"
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
  /* generate fields dynamic by selectedUniversity */
  return (
    <div>
      <form className='grid grid-cols-4 gap-3'>
        <Form.Item label="Select Institute" name={['customfields', 'institute_name']} >
          <Select showSearch optionFilterProp='children' filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
            onChange={handleInstituteChange} placeholder="--Select Institute--">
            {formData.map((item) => (
              <Option key={item.value} value={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
        {selectedInstitute && (
          <>
            <Form.Item label="Select University" name={['customfields', 'university_name']} >
              <Select showSearch optionFilterProp='children' filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
                onChange={handleUniversityChange} placeholder="--Select University--">
                {formData
                  .find((item) => item.value === selectedInstitute)
                  .universities?.map((university) => (
                    <Option key={university.value} value={university.value}>
                      {university.label}
                    </Option>
                  ))}
              </Select>
            </Form.Item>
            <Form.Item label="Users" name="userId">
              <Select placeholder="Select user" showSearch optionFilterProp="children" filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }>
                {userList && userList.result.map(user => (
                  <Option className="capitalize" key={user._id} value={user._id}>{user.fullname}</Option>
                ))}
              </Select>
            </Form.Item>
            {/* selectedcourse and then show specialization */}
            {selectedUniversity && (
              <>
                {formData
                  .find((item) => item.value === selectedInstitute)
                  .universities.find((university) => university.value === selectedUniversity)
                  .fields[0]?.courses ? (
                  <Form.Item label="Select Course" name={['education', 'course']}>
                    <Select showSearch optionFilterProp='children' filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    } onChange={handleCourseChange} placeholder="--Select Course--">
                      {formData
                        .find((item) => item.value === selectedInstitute)
                        .universities.find((university) => university.value === selectedUniversity)
                        .fields[0]?.courses?.map((course) => (
                          <Option key={course.value} value={course.value}>
                            {course.label}
                          </Option>
                        ))}
                    </Select>
                  </Form.Item>

                ) : null}
                {selectedCourse && (
                  <div>
                    <Form.Item label="Select Specialization" name={['customfields', 'enter_specialization']}>
                      <Select showSearch optionFilterProp='children' filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                        placeholder="--Select Specialization--"
                        onChange={handleSpecializationChange}
                      >
                        {formData
                          .find((item) => item.value === selectedInstitute)
                          .universities.find((university) => university.value === selectedUniversity)
                          .fields[0]?.courses
                          .find((course) => course.value === selectedCourse)
                          ?.specializations?.map((specialization) => (
                            <Option key={specialization.value} value={specialization.value}>
                              {specialization.label}
                            </Option>
                          ))}
                      </Select>
                    </Form.Item>
                  </div>
                )}
              </>
            )}
            {/* selectedcourse and then show specialization */}

          </>
        )}
      </form>
      {/* selected payment and then show generate fields fees */}
      {selectedUniversity && (
        <>
          <div>
            {formData
              .find((item) => item.value === selectedInstitute)
              .universities.find((university) => university.value === selectedUniversity)
              .fields[1]?.payments ? (
              <Form.Item label="Select payment" name={['customfields', 'payment_type']} className='grid col-span-1'>
                <Select showSearch optionFilterProp='children' filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                } onChange={handlePaymentChange} placeholder="--Select Payment--">
                  {formData
                    .find((item) => item.value === selectedInstitute)
                    .universities.find((university) => university.value === selectedUniversity)
                    .fields[1]?.payments?.map((payment) => (
                      <Option key={payment.value} value={payment.value}>
                        {payment.label}
                      </Option>
                    ))}
                </Select>
              </Form.Item>
            ) : null}
            {selectedPayment && (
              <div>
                <Form.Item>
                  {(formData
                    .find((item) => item.value === selectedInstitute)
                    .universities.find((university) => university.value === selectedUniversity)
                    .fields[1]?.payments.find((payment) => payment.value === selectedPayment)?.paymentType || []
                  ).map((pay) => (
                    <Form.Item
                      key={pay.label}
                      label={pay.label}
                      name={pay.name}  // Use pay.name as the name
                      rules={[
                        {
                          required: pay.required === 'require',
                          message: `Please input ${pay.label}!`,
                        },
                      ]}
                    >
                      <Input placeholder={pay.place} type={pay.type} />
                    </Form.Item>
                  ))}
                </Form.Item>
              </div>
            )}
          </div>
        </>
      )}
      {/* selected payment and then show generate fields fees */}
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