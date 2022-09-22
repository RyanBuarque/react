import Frase from './Frase';
import SayMyName from './SayMyName';
import Pessoa from './Pessoa';
import List from './List';
import Evento from './Evento';
import Form from './Form';
import Condicional from './Condicional';
import ListaArr from './ListaArr';
import StateLift from './StateLift';

function HelloWorld() {
  const nome = 'Plutão'
  return (
    <div>
      <div>
        <Frase />
        <h1>Hello World!!!</h1>
        <SayMyName nome="Jupter" />
        <SayMyName nome={nome} />
        <Pessoa
          nome="Marte2"
          idade="Milhões de anos"
          profissao="Habitat de marcianos"
          foto="https://via.placeholder.com/150"
        />
        <List />
        <Evento />
        <Form />
      </div>
      <div>
        <Condicional />
        <ListaArr />
        <StateLift />
      </div>
    </div>
  )
}

export default HelloWorld;
