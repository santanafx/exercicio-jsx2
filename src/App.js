import { Botao } from "./components/Botao";
import { Form } from "./components/Form";

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
  //Manipulando objetos
  const dados = mario;
  const total = dados.compras.map((dado) => Number(dado.preco.replace("R$ ", ""))).reduce((anterior, atual) => anterior + atual);

  //Criando arrays

  const array = ["007", "Top gun", "Inception"];

  const arrayObjs = [
    { nome: "Lucas", idade: 34 },
    { nome: "Julia", idade: 18 },
    { nome: "Pedro", idade: 25 },
  ];

  const produtos = [
    {
      id: 1,
      nome: "Smartphone",
      preco: "R$ 2000",
      cores: ["#29d8d5", "#252a34", "#fc3766"],
    },
    {
      id: 2,
      nome: "Notebook",
      preco: "R$ 3000",
      cores: ["#ffd045", "#d4394b", "#f37c59"],
    },
    {
      id: 3,
      nome: "Tablet",
      preco: "R$ 1500",
      cores: ["#365069", "#47c1c8", "#f95786"],
    },
  ];
  //mostrar somente produtos que sao acima de 1500 reais, utilizar h1, p e ul li.Mostrar lista de cores
  const x = produtos;
  const valor = x.filter(({ preco }) => Number(preco.replace("R$ ", "")) > 1500);

  //Criar botao
  const clicarBotao = (event) => {
    console.log(event);
  };

  //Criando componente e importando para App.js

  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Total: {total}</p>
      <p>
        Situação: <span style={{ color: dados.ativa ? "green" : "red" }}>{dados.ativa ? "Ativado" : "Desativado"}</span>{" "}
      </p>
      {total > 10000 && <p>Você gasto mais de R$10000</p>}
      <p>
        {array.map((dado) => (
          <li key={dado}>{dado}</li>
        ))}
      </p>
      <div>
        {arrayObjs
          .filter(({ idade }) => idade > 20)
          .map(({ nome, idade }) => (
            <li key={nome}>
              {nome}, {idade}
            </li>
          ))}
      </div>
      <section>
        {valor.map(({ id, nome, preco, cores }) => (
          <div key={id}>
            <h1>{nome}</h1>
            <p>Preço: {preco}</p>
            <ul>
              {cores.map((cor) => (
                <li style={{ backgroundColor: cor, color: "white" }} key={cor}>
                  {cor}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <div>
        <button onClick={clicarBotao}>Clique aqui!!!</button>
      </div>

      <Form />
    </>
  );
};

export default App;
