import { ErpLayout } from '@/layout';
import ErpPanel from '@/modules/ErpPanelModule';
import InvoiceForm from '@/modules/InvoiceModule/Forms/InvoiceForm';
export default function PaymentDataTableModule({ config }) {
  return (
    <>
      <ErpLayout>
        <ErpPanel config={config} CreateForm={InvoiceForm}></ErpPanel>
        </ErpLayout>
    </>


  );
}
