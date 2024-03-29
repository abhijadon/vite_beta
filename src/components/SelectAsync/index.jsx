import { useState, useEffect } from 'react';
import { request } from '@/request';
import useFetch from '@/hooks/useFetch';
import { Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PlusCircleOutlined } from '@ant-design/icons';

export default function SelectAsync({
  entity,
  displayLabels = ['name'],
  outputValue = '_id',
  value,
  onChange,
  loadDefault = false,
  defaultField = 'isDefault',
  redirectLabel = '',
  withRedirect = false,
  urlToRedirect = '/',
}) {
  const [selectOptions, setOptions] = useState([]);
  const [currentValue, setCurrentValue] = useState(undefined);

  const navigate = useNavigate();

  const asyncList = () => {
    return request.list({ entity });
  };
  const { result, isLoading: fetchIsLoading, isSuccess } = useFetch(asyncList);

  useEffect(() => {
    isSuccess && setOptions(result);
  }, [isSuccess]);

  const labels = (optionField) => {
    return displayLabels.map((x) => optionField[x]).join(' ');
  };

  useEffect(() => {
    if (value) {
      setCurrentValue(value[outputValue] || value);
      onChange(value[outputValue] || value);
    }
  }, [value]);

  const handleSelectChange = (newValue) => {
    if (newValue === 'redirectURL') {
      navigate(urlToRedirect);
    } else {
      if (onChange) {
        onChange(newValue[outputValue] || newValue);
      }
    }
  };

  useEffect(() => {
    if (loadDefault && selectOptions) {
      const elem = selectOptions.find((option) => {
        return option[defaultField] === true;
      });
      if (elem) {
        setCurrentValue(elem[outputValue] || elem);
        onChange(elem[outputValue] || elem);
      }
    }
  }, [selectOptions, loadDefault]);

  return (
    <Select
      loading={fetchIsLoading}
      disabled={fetchIsLoading}
      value={currentValue}
      onChange={handleSelectChange}
    >
      {(selectOptions && selectOptions.length === 0 && withRedirect) && (
        <Select.Option key="redirectURL" value="redirectURL">
          <PlusCircleOutlined /> {redirectLabel}
        </Select.Option>
      )}
      {(selectOptions || []).map((optionField) => (
        <Select.Option
          key={optionField[outputValue] || optionField}
          value={optionField[outputValue] || optionField}
        >
          {labels(optionField)}
        </Select.Option>
      ))}
    </Select>
  );
}