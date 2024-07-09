import { useState } from 'react';
import Button from './Button.js';
import Pacotes from './Pacotes.js';
import DataPackages from './DataPackages.js';
import Criteria from './Criteria.js';


function App() {
  const [criteria, setCriteria] = useState('');
  const [dados, setData] = useState([]);
  
  // const onCriteriaChange = () => {
  //   const fetchData = async () => {
  //     const data = await loadPacotes(criteria);
  //     console.log(`Pacotes carregados : ${JSON.stringify(data)}`);
  //     setData(data);
  //   }
  //   fetchData();
  // }

  // useEffect(onCriteriaChange, [criteria])  
  

  return (
    <>
      <Criteria setCriteria={setCriteria}/>
      
      <Button setData={setData} criteriaProp={criteria}/>
      <Pacotes dados={dados}/>
      <DataPackages data={dados}/>
    </>
  );
}

export default App;