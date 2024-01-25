import { ErpLayout } from '@/layout';
import ErpPanel from '@/modules/ErpPanelModule';
import PaymentDash from '../paymentDash'
export default function PaymentDataTableModule({ config }) {
  return (
    <>
      <div>
        <PaymentDash />
      </div >
      <ErpLayout>
        <ErpPanel config={config}></ErpPanel>
      </ErpLayout>
    </>


  );
}
