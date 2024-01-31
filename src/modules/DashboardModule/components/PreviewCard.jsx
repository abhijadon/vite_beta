import { useMemo, useState, useEffect } from 'react';
import { Col, Progress, Modal, Row } from 'antd';
import useLanguage from '@/locale/useLanguage';
import { DownOutlined } from '@ant-design/icons';

const colours = {
  HES: '#595959',
  DES: '#1890ff',
  SPU: '#1890ff',
  LPU: '#ffa940',
  SGVU: '#ff4d4f',
  UPES: '#13c2c2',
  UU: '#95de64',
  Total: '#ff4d4f',
  New: '#95de64',
  cancel: '#13c2c2',
  Enrolled: '#722ed1',
  Alumini: '#614700',
  University: '#614700',
  Institute: '#614700',
  CU: '#595959',
  JAIN: '#13c2c2',
  SVSU: '#722ed1',
  NMIMS: '#1890ff',
  VIGNAN: '#95de64',
  HINDUSTAN: '#13c2c2',
  MANIPAL: '#614700',
  SMU: '#722ed1',
  HU: '#ff4d4f',
  BOSSE: '#13c2c2',
  SABARMATI: '#95de64',
  MRU: '#595959',
  MANGALAYATAN: '#ffa940',
  'MANGALAYATAN ONLINE': '#1890ff',
};

const defaultStatistics = [
  {
    tag: 'University',
    value: 0,
  },
  {
    tag: 'SPU',
    value: 0,
  },
  {
    tag: 'SGVU',
    value: 0,
  },
  {
    tag: 'LPU',
    value: 0
  },
  {
    tag: 'SVSU',
    value: 0
  },
  {
    tag: 'NMIMS',
    value: 0
  },
  {
    tag: 'VIGNAN',
    value: 0
  },
  {
    tag: 'HINDUSTAN',
    value: 0
  },
  {
    tag: 'MANIPAL',
    value: 0
  },
  {
    tag: 'SMU',
    value: 0
  },
  {
    tag: 'HU',
    value: 0
  },
  {
    tag: 'BOSSE',
    value: 0
  },
  {
    tag: 'SABARMATI',
    value: 0
  },
  {
    tag: 'MRU',
    value: 0
  },
  {
    tag: 'MANGALAYATAN',
    value: 0
  },
  {
    tag: 'MANGALAYATAN ONLINE',
    value: 0
  },
  {
    tag: 'UPES',
    value: 0,
  },
  {
    tag: 'UU',
    value: 0,
  },

  {
    tag: 'CU',
    value: 0,
  },
  {
    tag: 'JAIN',
    value: 0,
  },
  {
    tag: 'SVSU',
    value: 0,
  },
  {
    tag: 'NMIMS',
    value: 0,
  },
  {
    tag: 'VIGNAN',
    value: 0,
  },

];

const defaultInvoiceStatistics = [
  {
    tag: 'Institute',
    value: 0,
  },
  {
    tag: 'HES',
    value: 0,
  },
  {
    tag: 'DES',
    value: 0,
  },
];

const defaultStatus = [
  {
    tag: 'Total',
    value: 0,
  },
  {
    tag: 'New',
    value: 0,
  },
  {
    tag: 'Enrolled',
    value: 0,
  },
  {
    tag: 'Cancel',
    value: 0,
  },
  {
    tag: 'Alumini',
    value: 0,
  },
];

const PreviewState = ({ tag, color, value, displayedValue }) => {
  const translate = useLanguage();
  const numericValue = isNaN(displayedValue) ? value : displayedValue;

  return (
    <div style={{ color: '#595959', marginBottom: 5 }}>
      <div className="left alignLeft uppercase">{translate(tag)}</div>
      <div className="right alignRight">{numericValue}</div>
      <Progress
        percent={Math.min(parseFloat(numericValue) / 10, 100)} // Assuming numericValue represents your data value
        showInfo={false}
        strokeColor={{
          '0%': color,
          '100%': color,
        }}
      />
    </div>
  );
};

const ExpandIcon = ({ onClick }) => (
  <div style={{ cursor: 'pointer', fontSize: '24px', textAlign: 'center' }} onClick={onClick}>
    <DownOutlined title="Show All" />
  </div>
);

export default function PreviewCard({
  title = 'Preview',
  statistics = defaultStatistics,
  isLoading = false,
  entity = 'invoice',
  type,
}) {
  const [showAllUniversities, setShowAllUniversities] = useState(false); // State to control the modal visibility

  const fetchData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER}api/payment/summary?type=${type}`);
      const data = await response.json();

      if (data) {
        const counts = {};
        const specificData = [...data.instituteSpecificData, ...data.universitySpecificData, ...data.statusSpecificData];

        specificData.forEach((item) => {
          const { _id, count } = item[0] || {};
          if (_id && count) {
            counts[_id] = count;
          }
        });

        if (type === 'university') {
          setUniversityCounts(counts);
        } else {
          setInstituteCounts(counts);
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  const statisticsMap = useMemo(() => {
    let defaultStats = [];
    if (entity === 'invoice') {
      defaultStats = defaultInvoiceStatistics;
    } else {
      defaultStats = entity === 'payment' ? defaultStatus : defaultStatistics;
    }

    return defaultStats.map((defaultStat) => {
      const matchedStat = Array.isArray(statistics)
        ? statistics.find((stat) => stat.tag === defaultStat.tag)
        : null;
      return matchedStat || defaultStat;
    });
  }, [statistics, entity]);

  const [universityCounts, setUniversityCounts] = useState([]);
  const [instituteCounts, setInstituteCounts] = useState([]);

  const universityTagCounts = useMemo(() => {
    const counts = {};
    Object.keys(universityCounts).forEach((tag) => {
      counts[tag] = universityCounts[tag] !== undefined ? universityCounts[tag] : 0;
    });
    return counts;
  }, [universityCounts]);

  const toggleShowAllUniversities = () => {
    setShowAllUniversities(!showAllUniversities);
  };

  const instituteTagCounts = useMemo(() => {
    const counts = {};
    Object.keys(instituteCounts).forEach((tag) => {
      counts[tag] = instituteCounts[tag] !== undefined ? instituteCounts[tag] : 0;
    });
    return counts;
  }, [instituteCounts]);
  const customSort = (a, b, counts) => {
    if (!a || !b) {
      return 0; // Add your desired handling for null values
    }

    // Sort based on counts in descending order
    const countA = counts[a.tag] || 0;
    const countB = counts[b.tag] || 0;

    return countB - countA;
  };
  const renderStatistics = (counts) => {
    return statisticsMap
      ?.sort((a, b) => customSort(a, b, counts))
      .slice(0, 3)
      .map((status, index) => {
        const count = counts[status.tag];
        return (
          <PreviewState
            key={index}
            tag={status.tag}
            color={colours[status.tag]}
            value={status.value}
            displayedValue={count !== undefined ? count.toString() : ''}
          />
        );
      })
      .filter(Boolean);
  };

  return (
    <Col className="gutter-row" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }}>
      <div className="pad20">
        <h3 style={{ color: '#22075e', fontSize: 'large', marginBottom: 40, marginTop: 0 }}>{title}</h3>
        {!isLoading && renderStatistics(type === 'university' ? universityTagCounts : instituteTagCounts)}

        {showAllUniversities && (
          <Modal title={
            <div className='mb-8' style={{ textAlign: 'center', borderBottom: '2px solid #efefef', width: '100%' }}>
              <span style={{ paddingBottom: '4px' }}>All</span>
            </div>
          } visible={showAllUniversities} onCancel={toggleShowAllUniversities} footer={null} width={900}>
            <Row gutter={[16, 16]}>
              {statisticsMap?.map((status, index) => {
                const count = type === 'university' ? universityTagCounts[status.tag] : instituteTagCounts[status.tag];
                return (
                  <Col key={index} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 6 }}>
                    <PreviewState
                      tag={status.tag}
                      color={colours[status.tag]}
                      value={status.value}
                      displayedValue={count !== undefined ? count.toString() : ''}
                    />
                  </Col>
                );
              })}
            </Row>
          </Modal>
        )}
        <div>
          {!showAllUniversities && <ExpandIcon onClick={toggleShowAllUniversities} />}
        </div>
      </div>
    </Col>
  );
}
