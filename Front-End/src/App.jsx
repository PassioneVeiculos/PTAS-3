import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  const handlesubmit = (e) => {
    e.preventDefault()
    console.log("handlesubmit")
  }

  return (
    <>
     <form onSubmit={(e) => handlesubmit(e)} className='form'>
    <h1>Cadastro de Reservas</h1>
      <h2>Email</h2>
      <input type="email" value={email} onChange={() => setEmail()}/>
      <h2>Senha</h2>
      <input type="password" value={senha} onChange={() => setSenha()}/>
      <button type='submit'/>
     </form>
     <p>Email:  {email}</p>
    </>
  )
}

export default App
