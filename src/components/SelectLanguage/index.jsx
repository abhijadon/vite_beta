import { useDispatch, useSelector } from 'react-redux';
import { Menu, Dropdown } from 'antd';
import { IoLanguageOutline } from 'react-icons/io5'
import languages from '@/locale/languages';
import { selectLangCode } from '@/redux/translate/selectors';
import { translateAction } from '@/redux/translate/actions';
import useLanguage from '@/locale/useLanguage';

const SelectLanguage = () => {
  const translate = useLanguage();
  const dispatch = useDispatch();
  const langCode = useSelector(selectLangCode);

  const menu = (
    <Menu className='w-48 scrollbar-custom max-h-[300px] overflow-y-auto'
      onClick={({ key }) => {
        dispatch(translateAction.translate(key));
      }}
      selectedKeys={[langCode]}
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
    <Dropdown menu={menu} trigger={['click']}>
      <span>
        <IoLanguageOutline className='text-black text-[24px] cursor-pointer' />
      </span>
    </Dropdown>
  );
};

export default SelectLanguage;
