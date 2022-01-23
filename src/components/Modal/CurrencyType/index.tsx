import React, { FC, useRef } from 'react';
import { useAction } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Portal from '../Portal';

import styles from './CurrencyType.module.scss';

interface ICurrencyType {
  closeModal: () => void;
}

const CurrencyType: FC<ICurrencyType> = ({ closeModal }) => {
  const { setChosenCurrency } = useAction();
  const { currency, loading } = useTypedSelector((state) => state.currencyType);
  const { currencies } = useTypedSelector((state) => state.currency);

  const ModalBgRef = useRef<HTMLDivElement>(null);

  const outsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === ModalBgRef.current) {
      closeModal();
    }
  };

  const acceptCurrency = (curr: string) => {
    setChosenCurrency(curr);
    closeModal();
  };

  const checkCurrencyType = () => {
    if (currencies.some((el) => el.ccy === currency)) {
      return (
        <>
          <p className={styles.modal__title}>Your valute is {currency}. Is it your preferred currency?</p>
          <div className={styles.modal__buttons}>
            <button onClick={() => acceptCurrency(currency)}>Yes</button>
            <button onClick={closeModal}>No</button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <p className={styles.modal__title}>
            Currency of your country ({currency}) isn't default . Please select one of the following:
          </p>
          <div className={styles.modal__buttons}>
            {currencies &&
              currencies.map((item, index) => (
                <button onClick={() => acceptCurrency(item.ccy)} key={`${item.ccy}_${index}`}>
                  {item.ccy}
                </button>
              ))}
          </div>
        </>
      );
    }
  };

  return (
    <Portal>
      <div className={styles.modal__background} ref={ModalBgRef} onClick={outsideClick}>
        <div className={styles.modal}>
          {loading ? (
            <span className={styles.loader}>Defining your location...</span>
          ) : (
            <div className={styles.modal__container}>{checkCurrencyType()}</div>
          )}
        </div>
      </div>
    </Portal>
  );
};

export default CurrencyType;
