import { Row, Col } from 'antd';
import useLanguage from '@/locale/useLanguage';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { request } from '@/request';
import useFetch from '@/hooks/useFetch';
import RecentTable from './components/RecentTable';
import PreviewCard from './components/PreviewCard';
import CustomerPreviewCard from './components/CustomerPreviewCard';
import DataYear from './components/DataYear'
export default function DashboardModule() {
  const translate = useLanguage();

  //  this is api 
  const { result: paymentResult, isLoading: paymentLoading } = useFetch(() =>
    request.summary({ entity: 'payment' })
  );

  //  this is api 
  const entityData = [
    {
      result: paymentResult,
      isLoading: paymentLoading,
      entity: 'payment',
      title: translate('Status preview'),
    },
  ];

  const statisticCards = entityData.map((data, index) => {
    const { result, entity, isLoading, title } = data;
    return (
      <PreviewCard
        key={index}
        title={title}
        isLoading={isLoading}
        entity={entity}
        statistics={
          !isLoading &&
          result?.performance?.map((item) => ({
            tag: item?.status,
            color: 'blue',
            value: item?.percentage,
          }))
        }
      />
    );
  });

  return (
    <>
      <div className='mb-10 flex gap-4'>
        <Card className="w-1/3 shadow-lg">
          <div className='flex justify-between'>
            <div>
              <CardContent orientation="horizontal">
                <CardContent>
                  <Typography className="text-gray-500">Total Course Fee</Typography>
                  <Typography level="h3" className="text-green-500">
                    ₹ {paymentResult?.total_course_fee}
                  </Typography>
                </CardContent>
              </CardContent>
            </div>

          </div>
        </Card>
        <Card className="w-1/3 shadow-lg">
          <div className='flex justify-between'>
            <div>
              <CardContent orientation="horizontal">
                <CardContent>
                  <Typography className="text-gray-500">Total Paid Amount</Typography>
                  <Typography level="h3" className="text-blue-500">
                    ₹ {paymentResult?.total_paid_amount}
                  </Typography>
                </CardContent>
              </CardContent>
            </div>
          </div>
        </Card>
        <Card className="w-1/3 shadow-lg">
          <div className='flex justify-between'>
            <div>
              <CardContent orientation="horizontal">
                <CardContent>
                  <Typography className="text-gray-500">Due Amount</Typography>
                  <Typography level="h3" className="text-red-500">
                    ₹ {paymentResult?.due_amount}
                  </Typography>
                </CardContent>
              </CardContent>
            </div>
            <div>
            </div>
          </div>
        </Card>
      </div>

      <div className="space30"></div>
      <Row gutter={[32, 32]}>
        <Col className="gutter-row w-full" sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 18 }}>
          <div className="whiteBox shadow" style={{ height: 458 }}>
            <Row className="pad20" gutter={[0, 0]}>
              {statisticCards}
            </Row>
          </div>
        </Col>
        <Col className="gutter-row w-full" sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 6 }}>
          <CustomerPreviewCard />
        </Col>
      </Row><div className="space30"></div>
      <Row gutter={[32, 32]}>
        <Col className="gutter-row w-full" sm={{ span: 24 }} lg={{ span: 12 }}>
          <div>
            <RecentTable />
          </div>
        </Col>

        <Col sm={{ span: 24 }} lg={{ span: 12 }}>
          <div className="whiteBox shadow-md rounded-xl pad20" style={{ height: '100%' }}>
            <DataYear />
          </div>
        </Col>
      </Row>
    </>
  );
}
