import React, { useState, useEffect } from 'react';
import { useCrudContext } from '@/context/crud';
import { Modal } from 'antd';
import CollapseBox from '../CollapseBox';
import { selectCreatedItem, selectUpdatedItem } from '@/redux/crud/selectors'; // Import selectUpdatedItem selector
import { useSelector } from 'react-redux';

export default function SidePanel({ config, topContent, bottomContent }) {
  const { ADD_NEW_ENTITY } = config;
  const { state, crudContextAction } = useCrudContext();
  const { isPanelClose, isBoxCollapsed } = state;
  const { panel, collapsedBox } = crudContextAction;
  const { isSuccess: createdSuccess } = useSelector(selectCreatedItem); // Rename isSuccess to createdSuccess
  const { isSuccess: updatedSuccess } = useSelector(selectUpdatedItem); // Add updatedSuccess selector
  const [isSidePanelClose, setSidePanel] = useState(isPanelClose);

  useEffect(() => {
    if (isPanelClose) {
      setTimeout(() => setSidePanel(isPanelClose), 200);
    } else {
      setSidePanel(isPanelClose);
    }
  }, [isPanelClose]);

  const collapsePanel = () => {
    panel.collapse();
  };

  const collapsePanelBox = () => {
    collapsedBox.collapse();
  };

  useEffect(() => {
    if (createdSuccess || updatedSuccess) { // Check both createdSuccess and updatedSuccess
      collapsePanel(); // Close the panel when either created or updated
    }
  }, [createdSuccess, updatedSuccess]); // Add updatedSuccess to the dependency array

  return (
    <Modal
      title="ERP_SODE"
      open={!isPanelClose}
      onCancel={collapsePanel}
      footer={null}
      width={1000}
    >
      <div>
        <CollapseBox
          buttonTitle={ADD_NEW_ENTITY}
          isCollapsed={isBoxCollapsed}
          onCollapse={collapsePanelBox}
          topContent={topContent}
          bottomContent={bottomContent}
        />
      </div>
    </Modal>
  );
}
