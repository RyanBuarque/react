import { useState } from 'react';
import SeuNome from './SeuNome';
import Saudacao from './Saudacao';

function StateLift() {

  const [nome, setNome] = useState();

  return (
    <div>
        <h1>State  Lift!!!</h1>
        <SeuNome setNome={setNome}/>
        <Saudacao nome={nome}/>
    </div>
  )
}

export default StateLift;
