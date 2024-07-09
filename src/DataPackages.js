import styled from 'styled-components';

const EntryHeader = styled.div`
    margin-bottom: 10px;
    `;  
const DataPack = styled.div`
    font-family: Arial, sans-serif;
    padding: 20px;
    margin-top: 2px;
`;
const Entry = styled.div`
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
`;
const ItemList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;
const Item = styled.li`
    margin-bottom: 10px;
    padding: 10px;
    border-bottom: 1px solid #eee;
`;

const DataPackages = (props) => {
  const { data } = props;
    return (
        <DataPack>
        {data.map((entry, index) => (
          <Entry key={index}>
            <EntryHeader>
              <h3>Localidade: {entry.localidade.descricao}</h3>
              <p>Descrição: {entry.descricao}</p>
            </EntryHeader>
            <ItemList >
              {entry.items.map((item, idx) => (
                <Item key={idx}>
                  {item.nomeHotel && <p><strong>Hotel:</strong> {item.nomeHotel}, {item.endereco}</p>}
                  {item.companiaAerea && <p><strong>Compania Aérea:</strong> {item.companiaAerea}, <strong>Voo:</strong> {item.numeroVoo}</p>}
                  {item.marca && <p><strong>Veículo Marca:</strong> {item.marca}, <strong>Modelo:</strong> {item.modelo}</p>}
                  <p><strong>Preço:</strong> {item.preco}</p>
                </Item>
              ))}
            </ItemList>
            <p><strong>Valor Total:</strong> {entry.valor}</p>
          </Entry>
        ))}
      </DataPack>
    );
  };
  
  export default DataPackages;