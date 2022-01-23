import { useEffect, useState } from 'react';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ICurrency } from '../../types/currencyType';
import { getCurrency, getCurrencyType } from '../../utils/api';
import ConvertingLine from '../ConvertingLine';

import styles from './Converter.module.scss';
const Converter = () => {
  const { defineCurrency, setCurrencies } = useAction();
  const { chosenCurrency, currencies } = useTypedSelector((state) => state.currency);

  const [currencyTypeVal, setCurrencyTypeVal] = useState<ICurrency>({ firstCurr: '', secondCurr: '' });
  const [currencyVal, setCurrencyVal] = useState<ICurrency>({ firstCurr: '', secondCurr: '' });

  useEffect(() => {
    getCurrencyType().then((res) => {
      if (res) {
        defineCurrency(res);
      }
    });
    getCurrency().then((res) => {
      if (res) {
        setCurrencies(res);
      }
    });
  }, []);

  useEffect(() => {
    setCurrencyTypeVal({ firstCurr: chosenCurrency, secondCurr: chosenCurrency });
  }, [chosenCurrency]);

  const handleSelectChange = (currencyType: ICurrency) => {
    setCurrencyTypeVal(currencyType);
  };

  const handleInputChange = (nums: ICurrency) => {
    setCurrencyVal(nums);
  };

  const convertingFunc = (firsCurr: string, secondCurr: string, number: number): string => {
    const firstCurrencyObj = currencies.find((el) => el.ccy === firsCurr);
    const secondCurrencyObj = currencies.find((el) => el.ccy === secondCurr);

    if (firstCurrencyObj?.sale && secondCurrencyObj?.buy) {
      return ((number * +firstCurrencyObj.sale) / +secondCurrencyObj.buy).toFixed(3).toString();
    }
    return '';
  };

  return (
    <main className={styles.converter}>
      <ConvertingLine
        currencies={currencies}
        setCurrencyTypeVal={(firstCurr) => handleSelectChange({ firstCurr, secondCurr: currencyTypeVal.secondCurr })}
        currencyTypeVal={currencyTypeVal.firstCurr}
        setCurrencyVal={(firstCurr) =>
          handleInputChange({
            firstCurr,
            secondCurr: convertingFunc(currencyTypeVal.firstCurr, currencyTypeVal.secondCurr, +firstCurr),
          })
        }
        currencyVal={currencyVal.firstCurr}
      />
      <ConvertingLine
        currencies={currencies}
        setCurrencyTypeVal={(secondCurr) => handleSelectChange({ firstCurr: currencyTypeVal.firstCurr, secondCurr })}
        currencyTypeVal={currencyTypeVal.secondCurr}
        setCurrencyVal={(secondCurr) =>
          handleInputChange({
            firstCurr: convertingFunc(currencyTypeVal.secondCurr, currencyTypeVal.firstCurr, +secondCurr),
            secondCurr,
          })
        }
        currencyVal={currencyVal.secondCurr}
      />
    </main>
  );
};

export default Converter;
