import { useLayoutEffect, useEffect, useState } from 'react';
import { Row, Col, Button } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import CreateForm from '@/components/CreateForm';
import UpdateForm from '@/components/UpdateForm';
import DeleteModal from '@/components/DeleteModal';
import ReadItem from '@/components/ReadItem';
import DataTable from '@/components/DataTable/DataTable';

import { useDispatch, useSelector } from 'react-redux';

import { selectCurrentItem } from '@/redux/crud/selectors';
import useLanguage from '@/locale/useLanguage';
import { crud } from '@/redux/crud/actions';
import { useCrudContext } from '@/context/crud';

import { CrudLayout } from '@/layout';
import AddPayment from '@/components/AddPayment';

function SidePanelTopContent({ config, formElements, withUpload, setActiveForm }) {
  const translate = useLanguage();
  const { crudContextAction, state } = useCrudContext();
  const { entityDisplayLabels } = config;
  const { modal, editBox, addBox } = crudContextAction;

  const { isReadBoxOpen, isEditBoxOpen, isAddBoxOpen } = state;
  const { result: currentItem } = useSelector(selectCurrentItem);
  const dispatch = useDispatch();

  const [labels, setLabels] = useState('');
  useEffect(() => {
    if (currentItem) {
      const currentLabels = entityDisplayLabels.map((x) => currentItem[x]).join(' ');
      setLabels(currentLabels);
    }
  }, [currentItem, entityDisplayLabels]);

  const removeItem = () => {
    dispatch(crud.currentAction({ actionType: 'delete', data: currentItem }));
    modal.open();
  };


  const addItem = () => {
    dispatch(crud.currentAction({ actionType: 'update', data: currentItem }));
    addBox.open();
    setActiveForm('addForm');
  };

  const editItem = () => {
    dispatch(crud.currentAction({ actionType: 'update', data: currentItem }));
    editBox.open();
    setActiveForm('updateForm');
  };

  return (
    <>
      <Row style={isReadBoxOpen || isAddBoxOpen || isEditBoxOpen ? { opacity: 1 } : { opacity: 0 }}>
        <Col span={13}>
          <p style={{ marginBottom: '10px' }}>{labels}</p>
        </Col>
        <Col span={11} className='mt-4'>
          <Button className='hover:text-blue-500 mb-4'
            onClick={removeItem}
            type="text"
            icon={<DeleteOutlined />}
            size="small"
            style={{ float: 'right', marginLeft: '5px' }}
          >
            {translate('remove')}
          </Button>
          <Button className='hover:text-blue-500'
            onClick={editItem}
            type="text"
            icon={<EditOutlined />}
            size="small"
            style={{ float: 'right', marginLeft: '5px' }}
          >
            {translate('edit')}
          </Button>
          <Button className='hover:text-blue-500'
            onClick={addItem}
            type="text"
            icon={<PlusOutlined />}
            size="small"
            style={{ float: 'right', marginLeft: '5px' }}
          >
            {translate('add_payment')}
          </Button>
        </Col>

        <Col span={24}>
          <div className="line"></div>
        </Col>
        <div className="space10"></div>
      </Row>
      <ReadItem config={config} />
      <UpdateForm config={config} formElements={formElements} withUpload={withUpload} />
      <AddPayment config={config} formElements={formElements} withUpload={withUpload} />
    </>
  );
}



function CrudModule({ config, createForm, updateForm, addForm, withUpload = false, filter }) {
  const dispatch = useDispatch();
  const [activeForm, setActiveForm] = useState(null);

  useLayoutEffect(() => {
    dispatch(crud.resetState());
  }, []);

  return (
    <CrudLayout
      config={config}
      sidePanelBottomContent={
        <CreateForm config={config} formElements={createForm} withUpload={withUpload} />
      }
      sidePanelTopContent={
        <SidePanelTopContent
          config={config}
          formElements={activeForm === 'updateForm' ? updateForm : addForm}
          withUpload={withUpload}
          activeForm={activeForm}
          setActiveForm={setActiveForm}
        />
      }
    >
      <DataTable config={config} extra={[]} filter={filter} />
      <DeleteModal config={config} />
    </CrudLayout >
  );
}

export default CrudModule;