import axios from 'axios';
import { ICurrencyResponse } from '../types/currency';
import { ICurrencyTypeReponse } from '../types/currencyType';

export const getCurrencyType = async () => {
  try {
    const res = await axios.get('https://api.ipify.org?format=json').then(({ data }) =>
      axios.get<ICurrencyTypeReponse>(`http://ipwhois.app/json/${data.ip}`).then(({ data }) => {
        if (data.currency_code === 'RUB') {
          data.currency_code = 'RUR';
        }
        return data.currency_code;
      })
    );

    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getCurrency = async () => {
  try {
    const res = await axios
      .get<ICurrencyResponse[]>('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then(({ data }) => data?.slice(0, 3));

    return res;
  } catch (err) {
    console.log(err);
  }
};
