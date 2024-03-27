import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { crud } from '@/redux/crud/actions';
import { selectCreatedItem } from '@/redux/crud/selectors';
import useLanguage from '@/locale/useLanguage';
import { Button, Form } from 'antd';
import Loading from '@/components/Loading';

export default function CreateForm({ config, formElements, withUpload = false }) {
  let { entity } = config;
  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useSelector(selectCreatedItem);
  const [form] = Form.useForm();
  const translate = useLanguage();
  const [isFormVisible, setIsFormVisible] = useState(true);

  const onSubmit = (fieldsValue) => {
    if (fieldsValue.file && withUpload) {
      fieldsValue.file = fieldsValue.file[0].originFileObj;
    }

    const trimmedValues = Object.keys(fieldsValue).reduce((acc, key) => {
      acc[key] = typeof fieldsValue[key] === 'string' ? fieldsValue[key].trim() : fieldsValue[key];
      return acc;
    }, {});
    dispatch(crud.create({ entity, jsonData: trimmedValues, withUpload }));
  };

  useEffect(() => {
    if (isSuccess) {
      form.resetFields();
      setIsFormVisible(false);
    }
  }, [isSuccess]);

  return (
    isFormVisible && (
      <Loading isLoading={isLoading}>
        <Form form={form} layout="vertical" onFinish={onSubmit} encType='multipart/form-data'>
          {formElements}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {translate('Submit')}
            </Button>
          </Form.Item>
        </Form>
      </Loading>
    )
  );
}
