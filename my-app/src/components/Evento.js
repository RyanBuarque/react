import Button from './Button';

function Evento() {

function meuEvento() {
    console.log("Opa, fui ativado!")
}

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento;