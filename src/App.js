import { useState } from 'react';
import Button from './Button.js';
import Pacotes from './Pacotes.js';
import DataPackages from './DataPackages.js';


function App() {
  const [dados, setData] = useState([]);

  return (
    <>
      <Pacotes dados={dados}/>
      <Button setData={setData}/>
      <DataPackages data={dados}/>
    </>
  );
}

export default App;