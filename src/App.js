const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;
  const total = dados.compras.map((dado) => Number(dado.preco.replace("R$ ", ""))).reduce((anterior, atual) => anterior + atual);

  console.log(total);

  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Total: {total}</p>
      <p>
        Situação: <span style={{ color: dados.ativa ? "green" : "red" }}>{dados.ativa ? "Ativado" : "Desativado"}</span>{" "}
      </p>
      {total > 10000 && <p>Você gasto mais de R$10000</p>}
    </>
  );
};

export default App;
