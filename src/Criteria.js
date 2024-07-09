
import styled from 'styled-components';

const InnerInput = styled.input`
  margin: 10px
`;

function Criteria(props) {
  const {setCriteria} = props;

  const onCriteriaChange = (e) => setCriteria(e.target.value);
  
  return (
    <>
      <label>Filtro</label>
      <InnerInput onChange={onCriteriaChange}></InnerInput>
    </>
      
  );
}

export default Criteria;