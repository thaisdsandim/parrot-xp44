import "../../../assets/cadastro.css";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3001'
});

function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [apartment, setApartment] = useState('')
  const [password, setPassword] = useState('')
  const [photo, setPhoto] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

const newUser = {
	name:`${name}`,
	email:`${email}`,
	apartment:`${Number(apartment)}`,
	password:`${password}`,
	photo:`${photo}`
}
  
const registerUser = () => {
   api.post('/register', newUser)
  .then(response => {
    console.log(response.data)
    alert('usuario cadastrado com sucesso'),
    navigate('/login')
  })
  .catch(error => console.log(error))
}

return (
  <div className="form">
    
    <div className="box-container">
      
      <div className="container-itens">

        <div className="logo">
          <img src="src/features/cadastro/assets/logo.png" alt="" />
        </div>

          <h1 className="title">CADASTRO</h1>

          <form className="box-form" action="">
            <Input type="text" placeholder="nome" value={name} onChange={(event) => setName(event.target.value)}/>
            <Input value={email} onChange={(e:any) => setEmail(e.target.value)} type="text" placeholder="email" required />
            <Input value={password} onChange={(e:any) => setPassword(e.target.value)} type="password" placeholder="senha" required/>
            <Input value={confirmPassword} onChange={(e:any) => setConfirmPassword(e.target.value)}type="password" placeholder="confirmar senha" required/>
            <Input value={apartment} onChange={(e:any) => setApartment(e.target.value)}type="text" placeholder="unidade/apartamento" required/>
            <Input value={photo} onChange={(e:any) => setPhoto(e.target.value)}type="text" placeholder="link da foto" />
            
            <Button onClick={registerUser} text="entrar"/>
          </form>

      </div>
    </div>
  </div>
)};

export default Register;