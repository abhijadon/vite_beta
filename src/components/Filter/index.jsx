import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { Input, Select, Modal, Button } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { request } from '@/request';
import { BiReset } from "react-icons/bi";

const shortcutsItems = [
  {
    label: 'This Week',
    getValue: () => {
      const today = dayjs();
      return [today.startOf('week'), today.endOf('week')];
    },
  },
  {
    label: 'Last Week',
    getValue: () => {
      const today = dayjs();
      const prevWeek = today.subtract(7, 'day');
      return [prevWeek.startOf('week'), prevWeek.endOf('week')];
    },
  },
  {
    label: 'Last 7 Days',
    getValue: () => {
      const today = dayjs();
      return [today.subtract(7, 'day'), today];
    },
  },
  {
    label: 'Current Month',
    getValue: () => {
      const today = dayjs();
      return [today.startOf('month'), today.endOf('month')];
    },
  },
  {
    label: 'Next Month',
    getValue: () => {
      const today = dayjs();
      const startOfNextMonth = today.endOf('month').add(1, 'day');
      return [startOfNextMonth, startOfNextMonth.endOf('month')];
    },
  },
  { label: 'Reset', getValue: () => [null, null] },
];


export default function BasicRangeShortcuts() {
  const [selectedRange, setSelectedRange] = useState([null, null]);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [selectedInstitute, setSelectedInstitute] = useState(null);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedCounselor, setSelectedCounselor] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [counselors, setCounselors] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [institutes, setInstitutes] = useState([]);
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    // Fetch teams data
    const fetchData = async () => {
      const { success, result } = await request.filter({ entity: 'payment' });

      if (success) {
        // Extract unique values for counselors, statuses, institutes, and universities
        const uniqueCounselors = [...new Set(result.map(item => item.counselor_email))];
        const uniqueStatuses = [...new Set(result.map(item => item.status))];
        const uniqueInstitutes = [...new Set(result.map(item => item.institute_name))];
        const uniqueUniversities = [...new Set(result.map(item => item.university_name))];

        setCounselors(uniqueCounselors);
        setStatuses(uniqueStatuses);
        setInstitutes(uniqueInstitutes);
        setUniversities(uniqueUniversities);
      }
    };

    fetchData();
  }, []);

  const handleDateChange = (date) => {
    setSelectedRange(date);
  };

  const openDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  const closeDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  // Function to extract counselor name from email
  const getCounselorName = (email) => {
    // Check if email is defined before splitting
    return email ? email.split('@')[0] : '';
  };

  // Function to reset all values
  const resetValues = () => {
    setSelectedRange([null, null]);
    setSelectedInstitute(null);
    setSelectedUniversity(null);
    setSelectedCounselor(null);
    setSelectedStatus(null);
  };

  return (
    <>
      <div className='flex items-center justify-start mb-10 gap-3'>
        <div className='flex items-center justify-start gap-3'>
          <div>
            {/* Select for Institute */}
            <Select
              placeholder="Select institute"
              className='w-60 h-10 shadow capitalize'
              value={selectedInstitute}
              onChange={(value) => setSelectedInstitute(value)}
            >
              {institutes.map(institute => (
                <Select.Option key={institute}>{institute}</Select.Option>
              ))}
            </Select>
          </div>
          <div>
            {/* Select for University */}
            <Select
              placeholder="Select university"
              className='w-60 h-10 shadow capitalize'
              value={selectedUniversity}
              onChange={(value) => setSelectedUniversity(value)}
            >
              {universities.map(university => (
                <Select.Option key={university}>{university}</Select.Option>
              ))}
            </Select>
          </div>
          <div>
            {/* Select for Counselor Name */}
            <Select
              placeholder="Select counselor name"
              className='w-60 h-10 shadow capitalize'
              value={selectedCounselor}
              onChange={(value) => setSelectedCounselor(value)}
            >
              {counselors.map(counselorEmail => (
                <Select.Option className="capitalize" key={counselorEmail}>
                  {getCounselorName(counselorEmail)}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div>
            {/* Select for Status */}
            <Select
              placeholder="Select status"
              className='w-60 h-10 shadow capitalize'
              value={selectedStatus}
              onChange={(value) => setSelectedStatus(value)}
            >
              {statuses.map(status => (
                <Select.Option key={status}>{status}</Select.Option>
              ))}
            </Select>
          </div>
        </div>

        {/* Date Range Picker */}
        <div>
          {/* Input for Date Range */}
          <Input
            className='w-52 h-10'
            value={`${selectedRange[0]?.format('YYYY-MM-DD')} - ${selectedRange[1]?.format('YYYY-MM-DD')}`}
            placeholder='Select Date Range'
            onClick={openDatePicker}
            suffix={<CalendarOutlined />}
          />
          {/* Modal for Date Range Picker */}
          <Modal
            visible={isDatePickerVisible}
            onCancel={() => {
              closeDatePicker();
              resetValues(); // Reset values when closing the modal
            }}
            footer={null}
            destroyOnClose={true}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDateRangePicker
                value={selectedRange}
                onChange={handleDateChange}
                slotProps={{
                  shortcuts: {
                    items: shortcutsItems,
                  },
                }}
                calendars={1}
              />
            </LocalizationProvider>
          </Modal>
        </div>
        <Button title='Reset All Filters' onClick={resetValues} className='bg-transparent text-red-500 font-thin text-lg h-10 hover:text-red-600'>
          <BiReset />
        </Button>
      </div>
    </>
  );
}