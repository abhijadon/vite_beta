import { useLayoutEffect, useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import CreateForm from '@/components/CreateForm';
import UpdateForm from '@/components/UpdateForm';
import DeleteModal from '@/components/DeleteModal';
import SearchItem from '@/components/SearchItem';
import DataTable from '@/components/DataTable/DataTable';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentItem } from '@/redux/crud/selectors';
import { crud } from '@/redux/crud/actions';
import { useCrudContext } from '@/context/crud';
import { CrudLayout } from '@/layout';

function SidePanelTopContent({ config, formElements, withUpload }) {
  const { state } = useCrudContext();
  const { entityDisplayLabels } = config;

  const { isReadBoxOpen, isEditBoxOpen } = state;
  const { result: currentItem } = useSelector(selectCurrentItem);
  const dispatch = useDispatch();

  const [labels, setLabels] = useState('');

  useEffect(() => {
    if (currentItem && entityDisplayLabels) {
      const currentLabels = entityDisplayLabels.map((x) => currentItem[x]).join(' ');
      setLabels(currentLabels);
    }
  }, [currentItem, entityDisplayLabels]);

  return (
    <>
      <Row>
        <Col span={24}>
          <div className="line"></div>
        </Col>
        <div className="space10"></div>
      </Row>
      <UpdateForm config={config} formElements={formElements} withUpload={withUpload} />
    </>
  );
}

function FixHeaderPanel({ config }) {
  return (
    <Row>
      <SearchItem config={config} />
    </Row>
  );
}

function CrudModule({ config, createForm, updateForm, withUpload = false, filter }) {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(crud.resetState());
  }, []);

  return (
    <CrudLayout
      config={config}
      fixHeaderPanel={<FixHeaderPanel config={config} />}
      sidePanelBottomContent={
        <CreateForm config={config} formElements={createForm} withUpload={withUpload} />
      }
      sidePanelTopContent={
        <SidePanelTopContent config={config} formElements={updateForm} withUpload={withUpload} />
      }
    >
      <DataTable config={config} extra={[]} filter={filter} />
      <DeleteModal config={config} />
    </CrudLayout>
  );
}

export default CrudModule;