const endpoint = "http://localhost:8080/pacotes";

async function loadPacotes() {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(`Carregado pacotes (payload : ${JSON.stringify(data)})`);
    return data;
  
}
  
  export { loadPacotes };