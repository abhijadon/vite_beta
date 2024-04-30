import { useState, useEffect } from 'react';
import { Button, Row, Col, Card, Statistic, Tag, Divider, Typography } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import {
  EditOutlined,
  FilePdfOutlined,
  CloseCircleOutlined,
  MailOutlined,
  ExportOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';
import { erp } from '@/redux/erp/actions';
import useLanguage from '@/locale/useLanguage';

import { generate as uniqueId } from 'shortid';

import { selectCurrentItem } from '@/redux/erp/selectors';

import { DOWNLOAD_BASE_URL } from '@/config/serverApiConfig';
import { useMoney } from '@/settings';
import useMail from '@/hooks/useMail';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
  const { moneyFormatter } = useMoney();
  return (
    <Row gutter={[12, 0]} key={item._id}>
      <Col className="gutter-row" span={11}>
        <p style={{ marginBottom: 5 }}>
          <strong>{item.itemName}</strong>
        </p>
        <p>{item.description}</p>
      </Col>
      <Col className="gutter-row" span={4}>
        <p
          style={{
            textAlign: 'right',
          }}
        >
          {moneyFormatter({ amount: item.price })}
        </p>
      </Col>
      <Col className="gutter-row" span={4}>
        <p
          style={{
            textAlign: 'right',
          }}
        >
          {item.quantity}
        </p>
      </Col>
      <Col className="gutter-row" span={5}>
        <p
          style={{
            textAlign: 'right',
            fontWeight: '700',
          }}
        >
          {moneyFormatter({ amount: item.total })}
        </p>
      </Col>
      <Divider dashed style={{ marginTop: 0, marginBottom: 15 }} />
    </Row>
  );
};

export default function ReadItem({ config, selectedItem }) {
  const translate = useLanguage();
  const { entity } = config;
  const dispatch = useDispatch();

  const { moneyFormatter } = useMoney();
  const { send } = useMail({ entity });
  const navigate = useNavigate();

  const { result: currentResult } = useSelector(selectCurrentItem);

  const resetErp = {
    status: '',
  };

  const [currentErp, setCurrentErp] = useState(selectedItem ?? resetErp);

  useEffect(() => {
    const controller = new AbortController();
    if (currentResult) {
      const { invoice, _id, ...others } = currentResult;
      setCurrentErp({ ...others, ...invoice, _id });
    }
    return () => controller.abort();
  }, [currentResult]);


  return (
    <>
      <PageHeader className='mt-0'
        extra={[
          <Button className='hover:bg-blue-200 hover:text-blue-800 bg-blue-300 text-blue-700'
            key={`${uniqueId()}`}
            onClick={() => {
              navigate(`/${entity.toLowerCase()}`);
            }}
            icon={<CloseCircleOutlined />}
          >
            {translate('Close')}
          </Button>,
          <Button className='hover:bg-blue-200 hover:text-blue-800 bg-blue-300 text-blue-700'
            key={`${uniqueId()}`}
            onClick={() => {
              window.open(
                `${DOWNLOAD_BASE_URL}${entity}/${entity}-${currentErp.lead_id}.pdf`,
                '_blank'
              );
            }}
            icon={<FilePdfOutlined />}
          >
            {translate('Download PDF')}
          </Button>,
          <Button className='hover:bg-blue-200 hover:text-blue-800 bg-blue-300 text-blue-700'
            key={`${uniqueId()}`}
            onClick={() => {
              send(currentErp._id);
            }}
            icon={<MailOutlined />}
          >
            {translate('Send by email')}
          </Button>,

          <Button className='hover:bg-blue-200 hover:text-blue-800 bg-blue-300 text-blue-700'
            key={`${uniqueId()}`}
            onClick={() => {
              dispatch(
                erp.currentAction({
                  actionType: 'update',
                  data: currentErp,
                })
              );
              navigate(`/${entity.toLowerCase()}/update/${currentErp._id}`);
            }}
            type="primary"
            icon={<EditOutlined />}
          >
            {translate('Edit')}
          </Button>,
        ]}
      >

        <div className="relative flex items-center">
          <div className="uppercase text-lg text-[#003399]">
            <span>
              Student Details
            </span>
          </div>
          <hr className="absolute left-48 right-0 top-3 border-t-2 border-gray-200" />
        </div>

        <div className='mt-3 mb-4 flex items-center justify-start gap-32'>
          <div>
            <span className='text-base font-bold capitalize'>Name:</span><span className='font-semibold leading-loose'> {currentErp.student_name || ''}</span>
          </div>
          <div>
            <span className='text-base font-bold capitalize'>Email:</span><span className='font-semibold leading-loose'>  {currentErp.email || ''}</span>
          </div>
          <div>
            <span className='text-base font-bold capitalize'>Phone:</span><span className='font-semibold leading-loose'>  {currentErp.phone || ''}</span>
          </div>
        </div>

        <div className="relative flex items-center mt-10">
          <div className="uppercase text-lg text-[#003399]">
            <span>
              Payment Details
            </span>
          </div>
          <hr className="absolute left-48 right-0 top-3 border-t-2 border-gray-200" />
        </div>
        <Row>


          <div className='mt-6 '>
            <Card className='h-32 w-[100%]'>
              <div className='mt-5 flex items-center gap-10'>
                <div className='border-r-2'>
                  <div className='pl-8 pr-8'>
                    <h4 className='text-base text-gray-500'>
                      Total course fee
                    </h4>
                    <p className='text-2xl mt-1.5 text-[#003399]'>
                      {moneyFormatter({ amount: currentErp.total_course_fee })}
                    </p>
                  </div>
                </div>
                <Col className='border-r-2'>
                  <div className='pl-8 pr-8'>
                    <h4 className='text-base text-gray-500'>
                      Total Paid Amount
                    </h4>
                    <p className='text-2xl mt-1.5 text-[#009445]'>
                      {moneyFormatter({ amount: currentErp.total_paid_amount })}
                    </p>
                  </div>
                </Col>
                <Col className='border-r-2'>
                  <div className='pl-8 pr-8'>
                    <h4 className='text-base text-gray-500'>
                      Paid Amount
                    </h4>
                    <p className='text-2xl mt-1.5 text-[#009445]'>
                      {moneyFormatter({ amount: currentErp.paid_amount })}
                    </p>
                  </div>
                </Col>

                <Col>
                  <div className='pl-8 pr-8'>
                    <h4 className='text-base text-gray-500'>
                      Due Amount
                    </h4>
                    <p className='text-2xl mt-1.5 text-[#FF0000]'>
                      {moneyFormatter({ amount: currentErp.due_amount })}
                    </p>
                  </div>
                </Col>
              </div>
            </Card>
          </div>
        </Row>
      </PageHeader>

    </>
  );
}
