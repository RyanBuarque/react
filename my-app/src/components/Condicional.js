import {useState} from 'react';

function Condicional() {

  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email);
        console.log(userEmail);
    }

    function limparEmail(e) {
        setUserEmail('');
    }

return(
    <div>
        <h2>Cadastre seu e-mail:</h2>
        <form>
        <div>
          <label htmlFor="email">E-mail: </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      <button onClick={enviarEmail}>Enviar e-mail</button>
      {userEmail && (
        <div>
          <p>O e-mail do usuário é: {userEmail}</p>
          <button onClick={limparEmail}>Limpar</button>
        </div>
      )}
      </form>
    </div>
)

}

export default Condicional;