import { Botao } from "./Botao";
import { Input } from "./Input";

const Form = () => {
  return (
    <form>
      <p>
        <label htmlFor="nome">Nome</label>
        <Input />
        <Botao texto="Clique Aqui!" />
      </p>
      <p>
        <label htmlFor="Email">Email</label>
        <Input />
        <Botao texto="Clique Aqui!" />
      </p>
    </form>
  );
};

export { Form };
