import { useState } from 'react';
import { Card, Progress, Spin, Modal } from 'antd';
import useFetch from '@/hooks/useFetch';
import { request } from '@/request';
import { FcExpand } from "react-icons/fc";

export default function PreviewCard() {
  const [modalType, setModalType] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(3);

  const { data: paymentResult, isLoading: paymentLoading } = useFetch(() =>
    request.summary({ entity: 'payment' })
  );

  const handleShowMore = (type) => {
    setModalType(type);
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalType(null);
    setIsModalVisible(false);
  };

  const sortDataDescending = (data) => {
    return data.slice().sort((a, b) => {
      const countA = a[0]?.count || 0;
      const countB = b[0]?.count || 0;
      return countB - countA;
    });
  };

  const getColorForId = (id) => {
    const hashCode = (str) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
      }
      return hash;
    };

    const hash = hashCode(id);
    const hue = (hash % 360 + 360) % 360;
    const saturation = 70 + (hash % 30); // Adjust saturation to create different shades
    const lightness = 50; // You can adjust lightness as needed
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };
  const renderProgressItems = (data) => {
    const sortedData = sortDataDescending(data);
    return sortedData.map((item, index) => (
      <div key={index}>
        {item[0] && item[0]._id && (
          <>
            <label htmlFor={item[0]._id} className='text-sm font-thin font-serif'>
              {item[0]._id}
            </label>
            <Progress
              className='w-72 mb-5'
              percent={item[0]?.count || 0}
              format={(percent) => `${percent}`}
              status="active"
              strokeColor={getColorForId(item[0]._id)}
              style={{ borderRadius: '8px', border: '1px solid #ccc', padding: '4px' }}
            />
          </>
        )}
      </div>
    ));
  };

  const renderModalContent = () => {
    switch (modalType) {
      case 'university':
        return renderProgressItems(paymentResult?.universitySpecificData || []);
      case 'institute':
        return renderProgressItems(paymentResult?.instituteSpecificData || []);
      case 'status':
        return renderProgressItems(paymentResult?.statusSpecificData || []);
      default:
        return null;
    }
  };

  return (
    <Card className='shadow-md drop-shadow-lg'>
      <div className='grid grid-cols-3 gap-2'>
        {paymentLoading ? (
          <div><Spin /></div>
        ) : (
          <>
            <div>
              <div className='mb-8 text-base font-thin font-serif'>University Specific Data</div>
              {renderProgressItems(paymentResult?.universitySpecificData.slice(0, itemsToShow) || [])}
              {itemsToShow !== Number.MAX_SAFE_INTEGER && (
                <div className='flex justify-center items-center'>
                  <FcExpand title='Show More' className='bg-neutral-50 text-[30px] cursor-pointer' onClick={() => handleShowMore('university')} />
                </div>
              )}
            </div>

            <div>
              <div className='mb-8 text-base font-thin font-serif'>Institute Specific Data</div>
              {renderProgressItems(paymentResult?.instituteSpecificData || [])}
              {itemsToShow !== Number.MAX_SAFE_INTEGER && (
                <div className='flex justify-center items-center'>
                  <FcExpand title='Show More' className='bg-neutral-50 text-[30px] cursor-pointer' onClick={() => handleShowMore('institute')} />
                </div>
              )}
            </div>

            <div>
              <div className='mb-8 text-base font-thin font-serif'>Status Specific Data</div>
              {renderProgressItems(paymentResult?.statusSpecificData || [])}
              {itemsToShow !== Number.MAX_SAFE_INTEGER && (
                <div className='flex justify-center items-center'>
                  <FcExpand title='Show More' className='bg-neutral-50 text-[30px] cursor-pointer' onClick={() => handleShowMore('status')} />
                </div>
              )}
            </div>
          </>
        )}

        <Modal
          width={1000}
          title={`All ${modalType && modalType.charAt(0).toUpperCase() + modalType.slice(1)} Data`}
          visible={isModalVisible}
          onCancel={handleModalCancel}
          footer={null}
        >
          <div className='grid grid-cols-3 gap-2 mt-5'>
            {renderModalContent()}
          </div>
        </Modal>
      </div>
    </Card>
  );
}
