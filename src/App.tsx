import { useState } from 'react';
import Converter from './components/Converter';
import CurrencyType from './components/Modal/CurrencyType';

function App() {
  const [openModal, setOpenModal] = useState(true);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="App">
      <Converter />
      {openModal && <CurrencyType closeModal={closeModal} />}
    </div>
  );
}

export default App;
