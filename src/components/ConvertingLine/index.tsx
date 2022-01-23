import { FC } from 'react';
import { ICurrencyResponse } from '../../types/currency';

import styles from './ConvertingLine.module.scss';

interface IConvertingLine {
  currencies: ICurrencyResponse[];
  setCurrencyTypeVal: (curr: string) => void;
  currencyTypeVal: string;
  setCurrencyVal: (curr: string) => void;
  currencyVal: string;
}

const ConvertingLine: FC<IConvertingLine> = ({
  currencies,
  setCurrencyTypeVal,
  currencyTypeVal,
  currencyVal,
  setCurrencyVal,
}) => {
  return (
    <div className={styles.convertingLine}>
      <input type="number" value={currencyVal} onChange={(e) => setCurrencyVal(e.target.value)} />
      <select value={currencyTypeVal} onChange={(e) => setCurrencyTypeVal(e.target.value)}>
        {currencies.map((item, index) => (
          <option key={`${item.ccy}_${index}`}>{item.ccy}</option>
        ))}
      </select>
    </div>
  );
};

export default ConvertingLine;
