
import styled from 'styled-components';
import { loadPacotes } from './stub.js';

const InnerButton = styled.button`
    margin: 10px;
`;

function Button(props) {
  const { setData, criteriaProp } = props;
  const onClick = async () => {
    console.log(`criteria on button? ${criteriaProp}`)
    const data = await loadPacotes(criteriaProp);
    setData(data)
  }

  return (
      <InnerButton onClick={onClick}>Carregar</InnerButton>
  );
}

export default Button;