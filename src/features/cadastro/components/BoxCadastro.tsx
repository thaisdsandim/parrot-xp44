import "../../../assets/cadastro.css";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

export default function BoxCadastro() {
  return (
    <div className="form">
      <div className="box-container">
        <div className="container-itens">
          <div className="logo">
            <img src="src/features/cadastro/assets/logo.png" alt="" />
          </div>

          <h1 className="title">CADASTRO</h1>
          <form className="box-form" action="">
            <Input name="nome" label="" type="text" placeholder="nome" />
            <Input name="email" label="" type="email" placeholder="email" />
            <Input name="senha" label="" type="password" placeholder="senha" />
            <Input
              name="confirmar"
              label=""
              type="password"
              placeholder="confirmar senha"
            />
            <Input
              name="un/apt"
              label=""
              type="number"
              placeholder="unidade/apartamento"
            />
            <Input
              name="link"
              label=""
              type="text"
              placeholder="link da foto"
            />
            <Button text="entrar" type={"button"} value={""} />
          </form>
        </div>
      </div>
    </div>
  );
}
