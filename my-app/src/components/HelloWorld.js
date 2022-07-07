import Frase from './Frase';
import SayMyName from './SayMyName';
import Pessoa from './Pessoa';
import List from './List';

function HelloWorld() {
  const nome = 'Plutão'
  return (
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
    </div>
  )
}

export default HelloWorld
