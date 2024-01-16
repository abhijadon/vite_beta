import currency from 'currency.js';
import { useSelector } from 'react-redux';
import storePersist from '@/redux/storePersist';
import { selectMoneyFormat } from '@/redux/settings/selectors';
const useMoney = () => {
  // Select money format settings from the Redux store
  const money_format_settings = useSelector(selectMoneyFormat);
  // Use the money_format_settings from Redux store, or provide default values
  const settingsState = storePersist.get('settings') || {};
  const {
    currency_symbol = '₹',
    currency_position = 'before',
    decimal_sep = '.',
    thousand_sep = ',',
    cent_precision = 2,
    zero_format = false,

  } = settingsState.money_format_settings || {};

  // Function to format currency
  function currencyFormat(amount) {
    return currency(amount).dollars() > 0 || !zero_format
      ? currency(amount, {
        separator: thousand_sep,
        decimal: decimal_sep,
        symbol: '',
        precision: cent_precision,
      }).format()
      : '0' +
      currency(amount, {
        separator: thousand_sep,
        decimal: decimal_sep,
        symbol: '',
        precision: cent_precision,
      }).format();
  }

  // Function to format money
  function moneyFormatter({ amount = 0 }) {
    return currency_position === 'before'
      ? currency_symbol + ' ' + currencyFormat(amount)
      : currencyFormat(amount) + ' ' + currency_symbol;
  }

  // Function to format amount
  function amountFormatter({ amount = 0 }) {
    return currencyFormat(amount);
  }

  // Function to format money row
  function moneyRowFormatter({ amount = 0 }) {
    return {
      props: {
        style: {
          textAlign: 'right',
          whiteSpace: 'nowrap',
        },
      },
      children: (
        <>
          {currency_position === 'before'
            ? currency_symbol + ' ' + currencyFormat(amount)
            : currencyFormat(amount) + ' ' + currency_symbol}
        </>
      ),
    };
  }

  return {
    moneyRowFormatter,
    moneyFormatter,
    amountFormatter,
    currency_symbol,
    currency_position,
    decimal_sep,
    thousand_sep,
    cent_precision,
    zero_format,
  };
};

export default useMoney;