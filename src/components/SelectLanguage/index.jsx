import { useDispatch, useSelector } from 'react-redux';
import { GTranslate as GTranslateIcon } from '@mui/icons-material';
import { Menu, Dropdown } from 'antd';

import languages from '@/locale/languages';
import { selectLangCode } from '@/redux/translate/selectors';
import { translateAction } from '@/redux/translate/actions';
import useLanguage from '@/locale/useLanguage';

const SelectLanguage = () => {
  const translate = useLanguage();
  const dispatch = useDispatch();
  const langCode = useSelector(selectLangCode);

  const menu = (
    <Menu
      onClick={({ key }) => {
        dispatch(translateAction.translate(key));
      }}
      selectedKeys={[langCode]}
      style={{
        maxHeight: '300px',
        overflowY: 'auto',
      }}
    >
      {languages.map((language) => (
        <Menu.Item key={language.value} disabled={language.disabled}>
          <div className="menu-option-label-item">
            {language.label}
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <span>
        <GTranslateIcon style={{ fontSize: '24px', cursor: 'pointer' }} />
      </span>
    </Dropdown>
  );
};

export default SelectLanguage;
