import { useState } from 'react'

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault()
    console.table(name)
    console.table(senha)
    console.log('cadastrou')
  }

  const [name, setName] = useState("Matheus")
  const [senha, setSenha] = useState()

  return (
    <div>
      <h1>Meu cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Seu Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="passwword">Senha</label>
          <input
            type="password"
            id="passwword"
            name="passwword"
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" placeholder="Enviar" />
        </div>
      </form>
    </div>
  )
}

export default Form
